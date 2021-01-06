import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchByCity from "../SearchByCity/SearchByCity";
import SearchByCountry from "../SearchByCountry/SearchByCountry";
import FlatButton from "../../Buttons/Button";
export default class CityPop extends Component {

    /*
    // Navigator design
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#ffa41b',
        }
    };*/

    // Navigation screen structure
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{
                    color: '#ffffff',
                    paddingTop: 100,
                    paddingBottom: 75,
                    fontSize: 80, 
                    fontWeight: 'bold',}}>CityPop</Text>
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
