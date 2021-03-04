import NextLink from 'next/link'

import { Flex, Box, Spacer, Heading } from '@chakra-ui/react'
import Session from 'components/Session'

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
        <Session />
      </Box>
    </Flex>
  )
}
