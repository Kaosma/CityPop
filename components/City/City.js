import React, { Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class City extends Component {
    
    // City class constructor
    constructor(props) {
        super(props);
        this.state = {
            city: props.route.params.city,
            population: 'unknown'
        }
        this.getCityData(props.route.params.city);
    }

    static navigationOptions = {
        title: 'City population',
    };

    // View structure once search is completed
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>population of {this.state.city}</Text>
            </View>
        );
    }
}
// Design for the City component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00a8cc',
        margin:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});