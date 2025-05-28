import { Slot, Tabs } from 'expo-router'

export default function DashboardLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FDFD96",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
        tabBarActiveTintColor: "#FAC898"
      }}
    >
      <Tabs.Screen name="profile" options={{title: "Profile"}} />
    </Tabs>
  )
}