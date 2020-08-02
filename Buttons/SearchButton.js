import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

// Custom search button
export default function SearchButton({ text, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Octicons name='search' size={24} color='white'/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		height: 50,
		width: 50,
		borderRadius: 25,
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: '#005082',
		marginTop: 20,
		justifyContent: 'center',
		textAlign: 'center',
	},
})