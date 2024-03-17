import { useFonts } from 'expo-font'

/**
 * Use Cache Assets Before Render
 * -
 */
export default function useCacheAssets() {
  const [fontsLoaded] = useFonts({ Helvetica: require('src/assets/fonts/Helvetica.otf') })
  return fontsLoaded
}
