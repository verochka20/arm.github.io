import React from "react";
import ReactDOM from "react-dom/client";
import {
  Container,
  ChakraProvider,
  Heading,
  Flex,
  Spacer,
  Text,
  Stack,
  Divider,
  Link,
  Image,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ararat from "./images/ararat.png";
import gora1 from "./images/gora1.png";
import gora2 from "./images/gora2.png";
import gora3 from "./images/gora3.png";
import line1 from "./images/line17.png";
import theme from "./theme.js";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IconButton } from '@chakra-ui/react'

function Well() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <ChakraProvider>
      <Container width="375px" height="100%" background="#1E263A">
        <Flex theme={theme}>
          <Heading size="md" color="#FFFFFF" h="30px">
            Armenian Travel Guide
          </Heading>
          <Spacer />
          <HamburgerIcon
            w="20px"
            h="20px"
            color="#FFFFFF"
            onClick={onOpen}
            ref={btnRef}
          ></HamburgerIcon>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="100%"
          >
            {/* Цвет Drawer задаётся в theme */}
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <Container
                  width="212px"
                  height="100%"
                  background="#3F4D72"
                  direction="column"
                  align="flex-end"
                >
                  <CloseIcon
                    onClick={onClose}
                    color="white"
                    w="20px"
                    h="20px"
                  />
                  <Spacer />
                  <Container>
                    <Link
                      href="https://www.booking.com/country/am.ru.html"
                      isExternal
                      color="#FFFFFF"
                    >
                      HOTEL
                    </Link>
                    <Spacer />
                    <Link
                      href="https://www.coral.ru/armeniya/"
                      isExternal
                      color="#FFFFFF"
                    >
                      TOURS
                    </Link>
                    <Spacer />
                    <Link
                      href="https://www.tripadvisor.ru/Restaurants-g293931-Armenia.html"
                      isExternal
                      color="#FFFFFF"
                    >
                      RESTAURANTS
                    </Link>
                    <Spacer />
                    <Link
                      href="https://www.aviasales.ru/countries/armeniya"
                      isExternal
                      color="#FFFFFF"
                    >
                      AIR TICKETS
                    </Link>
                    <Spacer />
                    <Link
                      href="https://tonkosti.ru/%D0%90%D1%80%D0%B5%D0%BD%D0%B4%D0%B0_%D0%B0%D0%B2%D1%82%D0%BE_%D0%B2_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D0%B8"
                      isExternal
                      color="#FFFFFF"
                    >
                      RENT A CAR
                    </Link>
                    <Flex>
                      <AiFillTwitterCircle color="white" size='30px' onClick="window.location.href = 'https://w3docs.com';"/>
                      <AiFillFacebook color="white" size='30px' />
                    </Flex>
                  </Container>
                </Container>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
        <Spacer />
        <Flex
          backgroundImage={ararat}
          width="100%"
          height="179px"
          direction="row"
          align="flex-end"
        >
          <Stack direction="row" h="90px" p={4}>
            <Image src={line1} />
            <Text fontSize="xs" color="#FFFFFF" w="250px">
              Armenia is a country of wonders… If you ask me where on our planet
              you can find more wonders, I would name, first of all, Armenia
            </Text>
          </Stack>
        </Flex>
        <Heading size="md" color="#FFFFFF" height="50px" p={4}>
          Why exactly Armenia?
        </Heading>
        <Flex h="90px">
          <Flex direction="row" align="center">
            <Text fontSize="sm" color="#FFFFFF">
              SAFETY AND HOSPITALITY
            </Text>
            <Divider
              orientation="vertical"
              borderColor="#E54B2E"
              h="40px"
              w="20px"
            />{" "}
            {/*в theme Размеры для Driver*/}
            <Text fontSize="sm" color="#FFFFFF">
              CUISINE AND ATTRACTIONS
            </Text>
            <Divider
              orientation="vertical"
              borderColor="#E54B2E"
              h="40px"
              w="20px"
            />
            <Text fontSize="sm" color="#FFFFFF">
              NO LANGUAGE BARRIER
            </Text>
          </Flex>
        </Flex>
        <Flex direction="row" align="center">
          {" "}
          {/*в theme Размеры для ссылок*/}
          <Spacer />
          <Link
            href="https://tonkosti.ru/%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%87%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D0%B8"
            isExternal
            fontSize="md"
            color="#FFFFFF"
          >
            Attractions
          </Link>
          <Spacer />
          <Link
            href="https://travelask.ru/articles/samye-krasivye-goroda-armenii"
            isExternal
            fontSize="md"
            color="#FFFFFF"
          >
            Cities
          </Link>
          <Spacer />
        </Flex>
        <Flex direction="row" align="center">
          <Spacer />
          <Divider orientation="horizontal" borderColor="#E54B2E" w="80px" />
          <Spacer />
          <Divider orientation="horizontal" borderColor="#E54B2E" w="40px" />
          <Spacer />
        </Flex>
        <Heading size="lg" color="#FFFFFF" h="60px" p={4}>
          Find something for yourself
        </Heading>
        <Flex h="376px" pos="relative" w="100%">
          <Image pos="absolute" right={0} src={gora2} />
          <Image pos="absolute" bottom={0} src={gora1} />
          <Image pos="absolute" bottom={0} right={0} src={gora3} />
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
