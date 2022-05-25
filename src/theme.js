import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    'html, body, #root': {
      height: '100%',
    },
    body: {
      bg: mode('white', '#1E263A')(props),
    },
  }),
}

export default extendTheme({ config, styles })
