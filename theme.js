import { extendTheme } from '@chakra-ui/react'

import { mode } from '@chakra-ui/theme-tools'



const config = {

  initialColorMode: 'dark',

  useSystemColorMode: false,

}


const styles = {

    global: (props) => ({
  
        fontSize: "xs",
        color: "#FFFFFF"
  
    }),
  
  }



export default extendTheme({ config, styles })