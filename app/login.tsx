import { View, Image, StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router';
import BackgroundGradient from '../components/BackgroundGradient';

function App() {
	return (
		<BackgroundGradient
			style={styles.container}
		>
			<View style={styles.content_view}>
				<Text style={styles.content}>
					login
				</Text>
			</View>
		</BackgroundGradient>
	);
}
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor:"transparent"
	},
	image: {
		marginTop: 92,
		height: 211
	},
	content_view: {
		marginTop: 79,
		width: 274,
		paddingInline: 20,
	},
	content: {
		fontSize: 50,
		fontFamily: "Poppins",
		fontWeight: "medium",
		color: "#FFFFFF",
		textAlign: "center",
		lineHeight: 30
	},
	sliders: {
		marginTop: 171,
		flexDirection: "row",
		gap: 9,
		position: "relative",
	},
	slide_1: {
		width: 33,
		height: 7,
		backgroundColor: 'white',
		borderRadius: 10
	},
	slide_2: {
		width: 18,
		height: 7,
		backgroundColor: 'white',
		borderRadius: 10
	},
	nextButton: {
		position: "absolute",
		right: -100,
		bottom: -28,
	}
})