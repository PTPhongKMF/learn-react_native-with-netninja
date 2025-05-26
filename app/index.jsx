import "../index.css"
import { Image, StyleSheet, Text, View } from 'react-native'

export default function index() {
  return (
    <View className="flex-1">
      <View className="flex-1 items-center justify-center bg-red-100">
        <Text className="font-bold text-3xl">home sweet home 1</Text>
        <Text>learning</Text>
        <Text>right now</Text>
      </View>

      <Image className="flex-1 p-4" source={{uri: "https://onlinepngtools.com/images/examples-onlinepngtools/boat-on-foggy-lake.png"}}/>

      <View className="flex-1 items-center justify-center bg-blue-100">
        <Text className="font-bold text-3xl">home sweet home 2</Text>
        <Text>learning</Text>
        <Text>right now</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})