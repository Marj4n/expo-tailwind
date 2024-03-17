import { Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/components/ScreenLayout'
import { Text, View } from 'react-native'
import { FONTFAMILY } from 'src/config/theme'

export default function HomeScreen() {
  return (
    <ScreenLayout testID="home-screen-layout">
      <View testID="home-screen-content" className="flex-1 justify-center items-center">
        <Stack.Screen options={{ title: 'Home Screen' }} />

        <Text testID="home-screen-title" className="text-[200px] mb-[10px] font-black">
          🏠
        </Text>
        <Text style={{ ...FONTFAMILY.helvetica }} testID="home-screen-text" className="text-primary mb-[15px] font-semibold md:text-lg">
          Go to app/index.tsx to edit
        </Text>
        <LinkButton href="/second" text="Go To Second Screen" />
      </View>
    </ScreenLayout>
  )
}
