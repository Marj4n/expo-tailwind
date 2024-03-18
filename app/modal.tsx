import { Stack } from 'expo-router'
import { Text, View } from 'react-native'
import ScreenLayout from 'src/components/ScreenLayout'
import { FONTFAMILY } from 'src/config/theme'

export default function ModalScreen() {
  return (
    <ScreenLayout testID="modal-screen-layout">
      <View testID="modal-screen-content" className="flex-1 justify-center items-center">
        <Stack.Screen options={{ title: 'Modal' }} />

        <Text testID="modal-screen-title" className="text-[160px] mb-[10px] font-black">
          🗿
        </Text>
        <Text style={{ ...FONTFAMILY.helvetica }} testID="modal-screen-text" className="text-primary mb-[15px] font-semibold md:text-lg">
          Go to app/modal.tsx to edit
        </Text>
      </View>
    </ScreenLayout>
  )
}
