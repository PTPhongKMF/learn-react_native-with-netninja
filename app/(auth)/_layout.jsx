import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <>
         <StatusBar value="auto" />
         <Stack screenOptions={{
          headerShown: false
         }}/>
    </>
  )
} 