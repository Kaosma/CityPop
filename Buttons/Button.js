import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

// Custom button
export default function FlatButton({ text, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}> { text }</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 3,
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: '#005082',
		marginTop: 20,
	},
	buttonText: {
		color: '#ffffff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 14,
		textAlign: 'center',
	}
})