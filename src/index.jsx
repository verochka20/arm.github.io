import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// Chakra UI Provider
import { ChakraProvider } from '@chakra-ui/react'
// App
import App from './screens/App'
// Styles
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
)
