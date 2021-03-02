import NextLink from 'next/link'

import { Flex, Box, Spacer, Heading, Button } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex alignItems="center">
      <Box py="6">
        <Heading as="h1" size="xl">
          <NextLink href="/">
            <a>DeepSchool</a>
          </NextLink>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="purple" variant="ghost" as="span">
          <NextLink href="/" passHref>
            Sair
          </NextLink>
        </Button>
      </Box>
    </Flex>
  )
}
