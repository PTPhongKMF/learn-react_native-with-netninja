import { Link } from "expo-router"
import "../index.css"
import { Image, Text, View } from 'react-native'

export default function index() {
  return (
    <View className="flex-1">
      <View className="flex-1 items-center justify-center bg-red-100">
        <Text className="font-bold text-3xl">home sweet home 1</Text>
        <Text>learning</Text>
        <Link href="/login" className="p-2 border-2 rounded-md mt-4">Login page</Link>
      </View>

      <Image className="flex-1 p-4" source={{ uri: "https://onlinepngtools.com/images/examples-onlinepngtools/boat-on-foggy-lake.png" }} />

      <View className="flex-1 items-center justify-center bg-blue-100">
        <Text className="font-bold text-3xl text-green-400">home sweet home 2</Text>
        <Text>learning</Text>
        <Link href="/about" className="p-2 border-2 rounded-md mt-4">About page</Link>
      </View>
    </View>
  )
}