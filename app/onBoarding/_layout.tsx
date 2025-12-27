import { Stack, Slot, useRouter } from 'expo-router';

function App() {
	return <Stack>
		<Stack.Screen name='index' options={{
			headerShown: false,
			animation: "fade",
			contentStyle: { backgroundColor: "transparent" }
		}} />
		<Stack.Screen name='service_1' options={{
			headerShown: false,
			animation: "fade",
			contentStyle: { backgroundColor: "transparent" }
		}} />
		<Stack.Screen name='service_2' options={{
			headerShown: false,
			animation: "fade",
			contentStyle: { backgroundColor: "transparent" }
		}} />
		<Stack.Screen name='service_3' options={{
			headerShown: false,
			animation: "fade",
			contentStyle: { backgroundColor: "transparent" }
		}} />
	</Stack>

}

export default App;