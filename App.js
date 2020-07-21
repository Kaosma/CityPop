import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredCity, setEnteredCity] = useState('');

  const inputHandler = (enteredText) => {
    setEnteredCity(enteredText);
  };

  const showCityHandler = () => {
    console.log(enteredCity);
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>CityPop</Text>

      <TextInput
        style = {{
          backgroundColor: '#ffffff', 
          height: 30, 
          width: 200,
          borderRadius: 5,
        }} 
        placeholder="City or country"
        onChangeText={inputHandler}
        value = {enteredCity}
      />
      <Button title = "Search" onPress={showCityHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa41b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'Avenir',
    marginBottom: 60,
  }
});
