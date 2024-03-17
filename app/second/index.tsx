import { Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/components/ScreenLayout'
import { Text, View } from 'react-native'
import { FONTFAMILY } from 'src/config/theme'

export default function SecondScreen() {
  return (
    <ScreenLayout testID="second-screen-layout">
      <View testID="second-screen-content" className="flex-1 justify-center items-center">
        <Stack.Screen options={{ title: 'Second Screen' }} />

        <Text testID="second-screen-title" className="text-[200px] mb-[10px] font-black">
          🥈
        </Text>
        <Text style={{ ...FONTFAMILY.helvetica }} testID="second-screen-text" className="text-primary mb-[15px] font-semibold md:text-lg">
          Go to app/second/index.tsx to edit
        </Text>

        <LinkButton href="/" text="Go To Home Screen" />
      </View>
    </ScreenLayout>
  )
}
