import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class SearchByCountry extends Component {

    constructor(props) {
        super(props);
        this.state = {country: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({country: event.target.value});
    }

    static navigationOptions = {
        title: 'Search by country',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Type name of country</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Country"
                    value={this.state.country}
                    onChange={this.handleChange}
                />
                <Button title='Search'
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});