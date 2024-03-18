import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import { appTheme } from 'src/config/theme'
import { StatusBar } from 'expo-status-bar'
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: appTheme.primary,
          headerShown: false,
          tabBarStyle: {
            height: 60
          },
          tabBarLabelStyle: {
            marginBottom: 8,
            marginTop: -5
          }
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Tab One',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Tab Two',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
          }}
        />
      </Tabs>
    </>
  )
}
