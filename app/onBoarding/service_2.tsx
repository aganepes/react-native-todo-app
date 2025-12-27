import { View, Image, StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router';
import BackgroundGradient from '../../components/BackgroundGradient';

function App() {
	return (
		<BackgroundGradient
			style={styles.container}
		>
			<Image source={require('../../assets/images/team-management.png')} style={styles.image} />
			{/* content */}
			<View style={styles.content_view}>
				<Text style={styles.content}>
					create a team task, invite people and manage your    work together
				</Text>
			</View>
			{/* slider */}
			<View style={styles.sliders}>
				<View style={styles.slide_2}></View>
				<View style={styles.slide_1}></View>
				<View style={styles.slide_2}></View>
				{/* next button */}
				<Link href={'/onBoarding/service_3'} style={styles.nextButton}>
					<Image source={require("../../assets/images/next_button.png")} style={{ width: 70, height: 70 }} />
				</Link>
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
	},
	image: {
		marginTop: 92,
		height: 211
	},
	content_view: {
		marginTop: 65,
		width: 274,
	},
	content: {
		fontSize: 20,
		fontFamily: "Poppins",
		fontWeight: "medium",
		color: "#FFFFFF",
		textAlign: "center",
		lineHeight: 30
	},
	sliders: {
		marginTop: 111,
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