import React from "react";
import ReactDOM from "react-dom/client";
import { Container, ChakraProvider, Heading, Flex, Spacer, Text, Stack, Divider, Link} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ararat from './images/ararat.png'
function Well() {
  return (
    <ChakraProvider>
      <Container width="375px" height="812px" background="#1E263A">
        <Flex color="#1E263A">
          <Heading size="md" color="#FFFFFF">
          Armenian Travel Guide
          </Heading>
          <Spacer />
          <HamburgerIcon w="20px" h="20px" color="#FFFFFF" />
        </Flex>
        <Spacer />
        <Container  backgroundImage={ararat} width="375px" height="179px">
        <Stack direction='row' h='90px' p={4} >
          <Divider orientation='vertical' colorScheme="E54B2E"/>  {/*цвет и размер для Driver не работает, нужно отдельно прописывать */}
          <Text fontSize="xs" color="#FFFFFF" >
          Armenia is a country of wonders… If you ask me where on our planet you
          can find more wonders, I would name, first of all, Armenia
          </Text>
        </Stack>
        </Container>  
        <Heading size="xs" color="#FFFFFF" height="15px">
          Why exactly Armenia?
        </Heading>
        <Flex direction='row' h='70px' p={4} display= 'flex' justify-content= 'space-between'>
          <Text fontSize="xs" color="#FFFFFF">
          SAFETY AND 
          HOSPITALITY
          </Text>
          <Divider orientation='vertical' /> 
          <Text fontSize="xs" color="#FFFFFF">
          CUISINE AND 
          ATTRACTIONS
          </Text>
          <Divider orientation='vertical' /> 
          <Text fontSize="xs" color="#FFFFFF">
          NO LANGUAGE 
          BARRIER
          </Text>
        </Flex>
        <Flex>
          <Flex direction='row' p={4} >
          <Link href='https://tonkosti.ru/%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%87%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D0%B8' isExternal fontSize="md" color="#FFFFFF">
            Attractions
          </Link>
          <Divider orientation='horizontal' /> 
          </Flex>
          <Flex>

          </Flex>
        </Flex>
        
      </Container>
    </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Well />
  </React.StrictMode>
);

