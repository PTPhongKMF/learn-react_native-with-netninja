import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Login</Text>
      <Link href="/" className="p-2 border-2 rounded-md mt-4">Go back Home</Link>
    </View>
  )
}