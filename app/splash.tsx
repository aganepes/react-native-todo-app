import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
const { width } = Dimensions.get('screen');
import BackgroundGradient from '../components/BackgroundGradient';

function App() {
	return (
		<BackgroundGradient
			style={styles.container}
		>
			<View style={{ gap: 23 }}>
				<Image source={require('../assets/images/checkmark.png')} style={styles.images} />
				<Text style={styles.text}>do it</Text>
			</View>
			<Text style={styles.textVersion}>v1.0.0</Text>
		</BackgroundGradient>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 228,
		backgroundColor:"transparent"
	},
	images: {
		width: 100,
	},
	text: {
		textTransform: "uppercase",
		fontWeight: 'bold',
		fontSize: 36,
		fontFamily: "Darumadrop",
		color: "white"
	},
	textVersion: {
		color: "white",
		fontSize: 20,
		fontFamily: "Time",
		position: "absolute",
		bottom: 40,
		left: width / 2 - 20,
	},
	link: {
		borderWidth: 1,
		borderColor: 'black',
		padding: 10,
	}
});
