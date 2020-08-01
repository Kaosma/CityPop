import React, { Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class Country extends Component {

    // Country class constructor
    constructor(props) {
        super(props);
        this.state = {
            country: props.route.params.country,
            population: 'unknown'
        }
        this.getCountryData(props.route.params.country);
    }

    static navigationOptions = {
        title: 'Country population',
    };

    // View structure once search is completed
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{this.state.country}</Text>
                <View style={styles.countryContainer}>
                    <Text style={styles.text}>City One</Text>
                </View>
                <View style={styles.countryContainer}>
                    <Text style={styles.text}>City Two</Text>
                </View>
                <View style={styles.countryContainer}>
                    <Text style={styles.text}>City Three</Text>
                </View>
            </View>
        );
    }
}
// Design for the City component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa41b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countryContainer: {
        backgroundColor: '#005082',
    },
    header: {
        marginTop: 40,
        color: '#005082',
        textTransform: 'uppercase',
        fontSize: 40,
    },
    text: {
        marginBottom: 40,
        color: '#ffffff',
        fontSize: 25,
        textTransform: 'uppercase',
    },
});