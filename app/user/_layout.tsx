import { Stack } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

function _layout() {
	return (
		<Stack>
			<Stack.Screen name='index' options={{headerShown:false}}/>
			<Stack.Screen name='[id]' options={{headerShown:false}}/>
		</Stack>
	)
}

export default _layout;