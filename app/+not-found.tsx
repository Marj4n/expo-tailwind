import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'
import ScreenLayout from 'src/components/ScreenLayout'
import { FONTFAMILY } from 'src/config/theme'

export default function NotFoundScreen() {
  return (
    <ScreenLayout testID="not-found-screen-layout">
      <View className="flex-1 justify-center items-center">
        <Stack.Screen options={{ title: 'Oops!' }} />
        <Text style={{ ...FONTFAMILY.helvetica }} className="text-xl font-bold text-primary">
          This screen doesn't exist.
        </Text>

        <Link href="/" className="mt-3 py-3">
          <Text className="text-sm text-highlight hover:underline">Go to home screen!</Text>
        </Link>
      </View>
    </ScreenLayout>
  )
}
