import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { View,Text } from 'react-native';

function User() {
	const {id} = useLocalSearchParams();
	return (
		<View>
			<Text style={{fontWeight:"bold"}}>ID: {id}</Text>
			<Link href={'/user'}>User</Link>
		</View>
	)
}

export default User;