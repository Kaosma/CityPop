import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import SearchByCity from "../SearchByCity/SearchByCity";
import SearchByCountry from "../SearchByCountry/SearchByCountry";
import FlatButton from "../../Buttons/Button";
export default class CityPop extends Component {

    // Navigator design
    static navigationOptions = {
        title: 'First Page',
        headerStyle: {
            backgroundColor: '#00a8cc',
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
                <header style={{
                    color: '#ffffff',
                    paddingBottom: 30,
                    fontSize: 80,
                    fontFamily: 'Arial', 
                    fontWeight: 'bold',}}>CityPop</header>
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
        justifyContent: 'center',
    },
});