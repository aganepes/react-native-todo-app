import { Link } from 'expo-router';
import React from 'react';
import { View, Text,Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
	// const [] = useFont
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, experimental_backgroundImage: "linear-gradient(to bottom,#1253AA,#05243E)" }}>
				<Text style={{textTransform:"uppercase",fontSize:50}}>USER Page</Text>
				<Link href={'/user/1'}>User 1</Link>
				<Link href={'/user/2'}>User 2</Link>
				<Link href={'/user/3'}>User 3</Link>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default ViewBoxesWithColorAndText;