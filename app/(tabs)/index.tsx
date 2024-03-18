import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/components/ScreenLayout'
import { Text, View } from 'react-native'
import { FONTFAMILY } from 'src/config/theme'
import { StatusBar } from 'expo-status-bar'

export default function TabHomeScreen() {
  return (
    <ScreenLayout testID="home-screen-layout">
      <View testID="home-screen-content" className="flex-1 justify-center items-center">
        <Text testID="home-screen-title" className="text-[200px] mb-[10px] font-black">
          🏠
        </Text>
        <Text style={{ ...FONTFAMILY.helvetica }} testID="home-screen-text" className="text-primary mb-[15px] font-semibold md:text-lg">
          Go to app/(tabs)/index.tsx to edit
        </Text>
        <LinkButton href="/modal" text="Go To Modal" />
      </View>
      <StatusBar style="light" />
    </ScreenLayout>
  )
}
