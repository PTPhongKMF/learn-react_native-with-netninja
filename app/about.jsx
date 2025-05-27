import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function About() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>About page</Text>
      <Link href="/" className="p-2 border-2 rounded-md mt-4">Go back Home</Link>
    </View>
  )
}