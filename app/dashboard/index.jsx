import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Dashboard() {
  return (
    <View className="flex-1">
      <View className="flex-[0.3] items-center justify-center bg-red-100">
        <Text className="font-bold text-3xl">This is your Dashboard</Text>
        <Text>learning</Text>
      </View>

      <Image className="flex-1 p-4" source={{ uri: "https://onlinepngtools.com/images/examples-onlinepngtools/boat-on-foggy-lake.png" }} />

      <View className="flex-1 items-center justify-center">
        <Text>Name</Text>
        <Text>Email</Text>
        <Text>Password</Text>
        <Link href="/dashboard/profile" className="p-2 border-2 rounded-md mt-4">To profile</Link>
      </View>
    </View>
  )
}