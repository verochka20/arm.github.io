import {
  Container,
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  Spacer,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Image,
} from '@chakra-ui/react'
// Icons
import { HamburgerIcon } from '@chakra-ui/icons'
// Images
import gora1 from '../images/gora1.png'
import gora2 from '../images/gora2.png'
import gora3 from '../images/gora3.png'
import ararat from '../images/ararat.png'

export default function App() {
  return (
    <Container maxW="container.xl" p={0} background="#1E263A">
      <Flex p="4">
        <Heading size="md">Armenian Travel Guide</Heading>
        <Spacer />
        <Popover>
          <PopoverTrigger>
            <HamburgerIcon w="20px" h="20px" />
          </PopoverTrigger>
          <PopoverContent color="white">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Spacer />
      <Container backgroundImage={ararat} width="375px" height="179px">
        <Stack direction="row" h="90px" p={4}>
          <Divider orientation="vertical" colorScheme="E54B2E" />{' '}
          {/* цвет и размер для Driver не работает, нужно отдельно прописывать */}
          <Text fontSize="xs">
            Armenia is a country of wonders… If you ask me where on our planet
            you can find more wonders, I would name, first of all, Armenia
          </Text>
        </Stack>
      </Container>
      <Heading size="xs" height="15px">
        Why exactly Armenia?
      </Heading>
      <Flex
        direction="row"
        h="70px"
        p={4}
        display="flex"
        justify-content="space-between"
      >
        <Text fontSize="xs">SAFETY AND HOSPITALITY</Text>
        <Divider orientation="vertical" />
        <Text fontSize="xs">CUISINE AND ATTRACTIONS</Text>
        <Divider orientation="vertical" />
        <Text fontSize="xs">NO LANGUAGE BARRIER</Text>
      </Flex>
      <Flex display="flex" direction="row">
        <Flex direction="row" p={4}>
          <Link
            href="https://tonkosti.ru/%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%87%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D0%B8"
            isExternal
            fontSize="md"
          >
            Attractions
          </Link>
          <Divider orientation="horizontal" />
        </Flex>
        <Flex>
          <Flex p={4}>
            <Link
              href="https://travelask.ru/articles/samye-krasivye-goroda-armenii"
              isExternal
              fontSize="md"
            >
              Cities
            </Link>
            <Divider orientation="horizontal" />
          </Flex>
        </Flex>
      </Flex>
      <Container p={0}>
        <Heading px={2} size="xl">
          Find something for yourself
        </Heading>
        <Flex h="376px" pos="relative">
          <Image pos="absolute" right={0} src={gora2} />
          <Image pos="absolute" bottom={0} src={gora1} />
          <Image pos="absolute" bottom={0} right={0} src={gora3} />
        </Flex>
      </Container>
    </Container>
  )
}
