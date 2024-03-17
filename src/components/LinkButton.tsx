import { Link } from 'expo-router'
import { openURL } from 'expo-linking'
import { Text, TouchableOpacity } from 'react-native'

interface Props {
  href: string
  text: string
}

export default function LinkButton({ href, text }: Props) {
  return href.substring(0, 1) === '/' ? (
    <Link testID="link-button" className="p-2 border border-highlight rounded bg-transparent" href={href}>
      <Text testID="link-button-text" className="text-highlight font-semibold">
        {text}
      </Text>
    </Link>
  ) : (
    <TouchableOpacity testID="link-button" onPress={() => openURL(href)} className="p-2 border border-highlight rounded bg-transparent">
      <Text testID="link-button-text" className="text-highlight font-semibold">
        {text}
      </Text>
    </TouchableOpacity>
  )
}


