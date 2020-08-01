import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import FlatButton from "../../Buttons/Button";

export default class SearchByCity extends Component {

    // SearchByCity class constructor
    constructor(props) {
        super(props);
        this.state = {city: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    // Event state change handler upon changing the value
    handleChange(event) {
        this.setState({city: event.target.value});
    }

    static navigationOptions = {
        title: 'Search by City',
    };

    // View structure
    render = () => {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput
                    style={{
                        fontSize: 16,
                        borderWidth: 1.5,
                        borderColor: '#005082',
                        paddingLeft: 5,
                        height: 40,
                        color: '#000839',
                    }}
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.handleChange}
                />
                <FlatButton 
                    text='Search'
                    onPress={() => navigate('City', {city: this.state.city})}
                />
            </View>
        );
    }
}
/// View Design
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa41b',
        alignItems: 'center',
        justifyContent: 'center',
    },
});