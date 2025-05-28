import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Login() {

  function handleSubmit() {
    console.log("submitted!");
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Login Page</Text>
      <Pressable className="bg-green-400 p-4 rounded-md border-yellow-400 border-[2px] active:bg-green-800"
      onPress={handleSubmit}>
        <Text>Login</Text>
      </Pressable>
      <Link href="/" className="p-2 border-2 rounded-md mt-4">Go back Home</Link>
    </View>
  )
}