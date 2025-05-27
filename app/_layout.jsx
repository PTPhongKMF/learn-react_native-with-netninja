import { View, Text, useColorScheme } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <>
<StatusBar value="auto" />

    <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.bg },
        headerTintColor: theme.text
      }}>
        <Stack.Screen name="index" options={{ title: "Home" }}/>
        <Stack.Screen name="about" options={{ title: "About" }}/>
      </Stack>
    </>
      
  )
}