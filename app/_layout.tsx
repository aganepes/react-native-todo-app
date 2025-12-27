import { Stack, Slot, useRouter } from 'expo-router';

function App() {
	return (<Stack>
		<Stack.Screen name='index' options={{
			headerShown: false,
			contentStyle: { backgroundColor: "transparent" }
		}} />
		<Stack.Screen name='onBoarding' options={{
			headerShown: false,
			contentStyle: { backgroundColor: "transparent" }
		}} />
		<Stack.Screen name='login' options={{
			headerShown: false,
			animation: "fade",
			contentStyle: { backgroundColor: "transparent" }
		}} />
	</Stack>);
}

export default App;