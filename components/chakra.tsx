import {
  ChakraProvider,
  localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ children }) {
  const colorModeManager = localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}
