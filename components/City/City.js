import React, { Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class City extends Component {

    // City class constructor
    constructor(props) {
        super(props);
        this.state = {
            city: props.route.params.city,
            population: 'unknown',
            code: 'A',
            name: 'default'
        }
        this.getCityData(props.route.params.city);
    }

    static navigationOptions = {
        title: 'City population',
    };

    // Fetching the data from the geonames API, maxRows=1 to only get the top city search
    getCityData(city){
        fetch("http://api.geonames.org/search?q="+city+"&username=weknowit&type=json&startRow=0&maxRows=1")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.geonames && result.geonames[0]){
                        this.setState({
                            population: result.geonames[0].population,
                            code: result.geonames[0].fcl,
                            city: city.toLowerCase(),
                            name: result.geonames[0].name.toLowerCase()
                        })
                    } 
                },
                (error) => {
                    console.log("error occured");
                }
            )
    }

    // View structure once search is completed
    render() {
        const { navigate } = this.props.navigation;
        if(this.state.code!='P' || this.state.city!=this.state.name) {
            return(
                <View style={styles.container}>
                    <Text style={styles.alternateHeader}>no city found</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>{this.state.city}</Text>
                    <View style={styles.populationContainer}>
                        <Text style={styles.text}>population</Text>
                        <Text style={styles.populationText}>{this.state.population}</Text>
                    </View>
                </View>
            );
        } 
    }
}

/// Design for the City component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa41b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    populationContainer: {
        flex: 2,
        borderWidth: 3,
        borderColor: '#000839',
        backgroundColor: '#ffa41b',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 75,
        marginBottom: 300,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
    },
    header: {
        marginTop: 40,
        color: '#005082',
        textTransform: 'uppercase',
        fontSize: 40,
    },
    alternateHeader: {
        color: '#005082',
        textTransform: 'uppercase',
        fontSize: 40,
    },
    text: {
        marginTop: 10,
        marginBottom: 30,
        color: '#ffffff',
        fontSize: 30,
        textTransform: 'uppercase',
    },
    populationText: {
        color: '#005082',
        fontSize: 60,
        marginBottom: 70,
    }
});