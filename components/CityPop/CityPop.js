import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchByCity from "../SearchByCity/SearchByCity";
import SearchByCountry from "../SearchByCountry/SearchByCountry";
import FlatButton from "../../Buttons/Button";
export default class CityPop extends Component {

    // Navigator design
    static navigationOptions = {
        title: 'CityPop',
        headerStyle: {
            backgroundColor: '#00a8cc',
            color: '#ffffff',
            paddingTop: 100,
            paddingBottom: 75,
            fontSize: 80,
            fontFamily: 'Arial', 
            fontWeight: 'bold'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    // Navigation screen structure
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatButton 
                    text='Search by city'
                    onPress={() =>navigate('SearchByCity')}
                />
                <FlatButton 
                    text='Search by country'
                    onPress={() =>navigate('SearchByCountry')}
                />
            </View>
        );
    }
}

/// Navigation screen Design
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa41b',
        alignItems: 'center',
    },
});