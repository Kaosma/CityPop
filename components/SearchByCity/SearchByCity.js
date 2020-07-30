import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

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
                <Text>Type name of city</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.handleChange}
                />
                <Button title='Search'
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
        margin:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});