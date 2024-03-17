import 'expo-dev-client'
import { ThemeProvider as NavProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { navTheme } from 'src/config/theme'
import { SafeAreaView } from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'

export default function AppLayout() {
  NativeWindStyleSheet.setOutput({
    default: 'native'
  })
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView className="flex-1 flex-col bg-background">
        <NavProvider value={navTheme}>
          <Slot screenOptions={{ headerShown: false }} />
        </NavProvider>
      </SafeAreaView>
    </>
  )
}
