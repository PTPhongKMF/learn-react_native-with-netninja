import { View, Text } from 'react-native'
import { Slot, Stack } from 'expo-router'

export default function RootLayout() {
  return (
      <Stack screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#ff0000"
      }}>
        <Stack.Screen name="index" options={{ title: "Home" }}/>
        <Stack.Screen name="about" options={{ title: "About" }}/>
      </Stack>
  )
}