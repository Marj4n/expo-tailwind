import ScreenLayout from 'src/components/ScreenLayout'
import { Text, View } from 'react-native'
import { FONTFAMILY } from 'src/config/theme'

export default function TabSecondScreen() {
  return (
    <ScreenLayout testID="second-screen-layout">
      <View testID="second-screen-content" className="flex-1 justify-center items-center">
        <Text testID="second-screen-title" className="text-[200px] mb-[10px] font-black">
          🥈
        </Text>
        <Text style={{ ...FONTFAMILY.helvetica }} testID="second-screen-text" className="text-primary mb-[15px] font-semibold md:text-lg">
          Go to app/(tabs)/two.tsx to edit
        </Text>
      </View>
    </ScreenLayout>
  )
}
