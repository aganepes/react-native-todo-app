import { Slot, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import * as Splash from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import SplashScreen from './splash';

Splash.preventAutoHideAsync();

function _layout() {
	// 
	const [appIsReady, setAppIsReady] = useState<boolean>(false);
	const router = useRouter();
	// 
	useFonts({
		"Darumadrop": require('../assets/fonts/DarumadropOne-Regular.ttf'),
		"PoppinsMedium": require("../assets/fonts/Poppins-Medium.ttf")
	});
	// 
	useEffect(() => {
		const loading = async () => {
			const time = setTimeout(() => {
				setAppIsReady(true);
				Splash.hide();
				router.replace('/onBoarding');
			},5000);
			return clearTimeout(time);
		}
		loading();
	}, [appIsReady]);
	// 
	if(!appIsReady) 
		return <SplashScreen/>;
	else 
		return <Slot/>
	
}

export default _layout;