import { useSession, signIn, signOut } from 'next-auth/client'

import NextLink from 'next/link'
import { Flex, Button, Avatar, Text } from '@chakra-ui/react'

export default function Session() {
  // const [session, loading] = useSession()
  const [session] = useSession()

  if (session) {
    return (
      <Flex alignItems="center">
        <Avatar
          size="sm"
          name={session.user.name}
          src={session.user.image}
          mr="2"
        />
        <Text fontSize="sm" color="gray.500" mr="2">
          {session.user.name}
        </Text>
        <NextLink href="/api/auth/signout">
          <Button
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
            colorScheme="purple"
            variant="outline"
          >
            Sair
          </Button>
        </NextLink>
      </Flex>
    )
  }

  return (
    <NextLink href="/api/auth/signin">
      <Button
        onClick={(e) => {
          e.preventDefault()
          signIn('google')
        }}
        colorScheme="purple"
        variant="solid"
      >
        Entrar
      </Button>
    </NextLink>
  )
}
