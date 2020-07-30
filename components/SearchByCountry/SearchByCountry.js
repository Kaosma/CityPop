import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import FlatButton from "../../Buttons/Button";

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
                <TextInput
                    style={{
                        borderWidth: 1.5,
                        borderColor: '#005082',
                        paddingLeft: 5,
                        height: 40,
                        color: '#000839',
                    }}
                    placeholder="Country"
                    value={this.state.city}
                    onChange={this.handleChange}
                />
                <FlatButton 
                    text='Search'
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa41b',
        margin:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});