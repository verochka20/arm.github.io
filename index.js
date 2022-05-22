import React from "react";
import ReactDOM from "react-dom/client";
import { Container, ChakraProvider, Heading, Flex, Spacer, Text, Stack, Divider, Link, Button, Box, ButtonGroup} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ararat from './images/ararat.png'
import gora1 from './images/gora1.png'
import gora2 from './images/gora2.png'
import gora3 from './images/gora3.png'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
function Well() {
  return (
    <ChakraProvider>
      <Container width="375px" height="812px" background="#1E263A">
        <Flex color="#1E263A">
          <Heading size="md" color="#FFFFFF">
          Armenian Travel Guide
          </Heading>
          <Spacer />
          <Popover>
  <PopoverTrigger>
    <HamburgerIcon w="20px" h="20px" color="#FFFFFF">Trigger</HamburgerIcon>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>
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
        <Flex display= 'flex' direction='row'>
          <Flex direction='row' p={4} >
          <Link href='https://tonkosti.ru/%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%87%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D0%B8' isExternal fontSize="md" color="#FFFFFF">
            Attractions
          </Link>
          <Divider orientation='horizontal' /> 
          </Flex>
          <Flex>
          <Flex p={4} >
          <Link href='https://travelask.ru/articles/samye-krasivye-goroda-armenii' isExternal fontSize="md" color="#FFFFFF">
            Cities
          </Link>
          <Divider orientation='horizontal' /> 
          </Flex>
          </Flex>
        </Flex>
        <Container>
          <Heading size="lg" color="#FFFFFF">
            Find something for yourself
          </Heading>
          <Flex>
            <img src={gora1}/>
            <img src={gora2}/>
            <img src={gora3}/>
          </Flex>
        </Container>
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

