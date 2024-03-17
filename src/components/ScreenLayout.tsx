import Spinner from 'src/components/Spinner'
import useCacheAssets from 'src/hooks/useCacheAssets'
import { View } from 'react-native'

interface Props {
  children: React.ReactNode
  testID?: string
}

export default function ScreenLayout({ children, testID }: Props) {
  const areAssetsCached = useCacheAssets()

  return (
    <View testID={testID} className="flex-1">
      {areAssetsCached ? children : <Spinner />}
    </View>
  )
}
