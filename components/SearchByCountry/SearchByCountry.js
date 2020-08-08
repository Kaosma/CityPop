import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import SearchButton from "../../Buttons/SearchButton";

export default class SearchByCountry extends Component {

    // SearchByCountry class constructor
    constructor(props) {
        super(props);
        this.state = {country: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    // Event state change handler upon changing the value of the country
    handleChange(event) {
        this.setState({country: event.target.value});
    }

    static navigationOptions = {
        title: 'Search by country',
    };

    // View structure
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput
                    style={{
                        fontSize: 20,
                        borderWidth: 1.5,
                        borderColor: '#005082',
                        textAlign: 'center',
                        height: 55,
                        width: 275,
                        color: '#000839',
                    }}
                    placeholder="Country"
                    value={this.state.country}
                    onChange={this.handleChange}
                />
                <SearchButton 
                    onPress={() => navigate('Country', {country: this.state.country})}
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