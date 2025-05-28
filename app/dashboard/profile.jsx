import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View className="flex-1">
          <View className="flex-[0.3] items-center justify-center bg-red-100">
            <Text className="font-bold text-3xl">This is your Profile</Text>
            <Text>learning</Text>
          </View>
    
          <Image className="flex-1 p-4" source={{ uri: "https://onlinepngtools.com/images/examples-onlinepngtools/boat-on-foggy-lake.png" }} />
    
          <View className="flex-1 items-center justify-center">
            <Text>Name</Text>
            <Text>Email</Text>
            <Text>Password</Text>
          </View>
        </View>
  )
}