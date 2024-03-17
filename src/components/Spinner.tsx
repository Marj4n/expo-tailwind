import { ActivityIndicator, View } from 'react-native'
import { appTheme } from 'src/config/theme'

export default function Spinner() {
  return (
    <View testID="spinner" className="bg-background h-full w-full flex items-center justify-center">
      <ActivityIndicator testID="activity-indicator" color={appTheme.highlight} size="large" />
    </View>
  )
}
