import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CityPop from "./components/CityPop/CityPop";
import SearchByCity from "./components/SearchByCity/SearchByCity";
import SearchByCountry from "./components/SearchByCountry/SearchByCountry";
import City from "./components/City/City";

// Returning the Stack Navigator with the different components

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name=" " component={CityPop} />
            <Stack.Screen name="SearchByCity" component={SearchByCity} />
            <Stack.Screen name="SearchByCountry" component={SearchByCountry} />
            <Stack.Screen name="City" component={City} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}