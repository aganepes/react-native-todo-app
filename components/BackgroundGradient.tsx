import React, {type ReactNode} from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

function App({children,style}:{children:ReactNode,style:Object}) {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<LinearGradient
					colors={['#1253AA', '#05243E']}
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					style={style}
				>
					{children}
				</LinearGradient>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

export default App;