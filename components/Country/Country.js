import React, { Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import FlatButton from "../../Buttons/Button";

export default class Country extends Component {

    // Country class constructor
    constructor(props) {
        super(props);
        this.state = {
            country: props.route.params.country,
            populationOne: 'unknown',
            populationTwo: 'unknown',
            populationThree: 'unknown',
            cityOne: 'unknown',
            cityTwo: 'unknown',
            cityThree: 'unknown',
            code: 'P'
        }
        this.getCountryData(props.route.params.country);
    }

    static navigationOptions = {
        title: 'Country population',
    };

    // Checking if the country input in fact gives a country from the API by checking its featureClass
    getCountryData(country){
        fetch("http://api.geonames.org/search?q="+country+"&username=weknowit&type=json")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.geonames && result.geonames[0]){
                        this.setState({
                            code: result.geonames[0].fcl
                        })
                        if (this.state.code=='A') {
                            this.getCitiesData(country);
                        }
                    }
                },
                (error) => {
                    console.log("error occured");
                }
            )
    }

    // Fetching the data from the geonames API for the selected country, maxRows=3 to only get the top 3 populated cities
    getCitiesData(country){
        fetch("http://api.geonames.org/search?q="+country+"&featureClass=P&username=weknowit&type=json&orderby=population&startRow=0&maxRows=3")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.geonames && result.geonames[0] && result.geonames[1] && result.geonames[2]){
                        this.setState({
                            populationOne: result.geonames[0].population,
                            cityOne: result.geonames[0].name,
                            populationTwo: result.geonames[1].population,
                            cityTwo: result.geonames[1].name,
                            populationThree: result.geonames[2].population,
                            cityThree: result.geonames[2].name
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
        if (this.state.cityOne=='unknown'){
            return (
                <View style={styles.alternateContainer}>
                    <Text style={styles.alternateText}>no country found</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>{this.state.country}</Text>
                    <FlatButton 
                        text={this.state.cityOne}
                        onPress={() => navigate('City', {city: this.state.cityOne})}
                    />
                    <FlatButton 
                        text={this.state.cityTwo}
                        onPress={() => navigate('City', {city: this.state.cityTwo})}
                    />
                    <FlatButton 
                        text={this.state.cityThree}
                        onPress={() => navigate('City', {city: this.state.cityThree})}
                    />
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
    },
    alternateContainer: {
        flex: 1,
        backgroundColor: '#ffa41b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#005082',
        textTransform: 'uppercase',
        fontSize: 40,
        marginBottom: 100,
        marginTop: 40,
    },
    alternateText: {
        color: '#005082',
        textTransform: 'uppercase',
        fontSize: 40,
    }
});