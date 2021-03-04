import { useSession, getSession, signIn } from 'next-auth/client'
import NextLink from 'next/link'

import Card from 'components/Card'
import Header from 'components/Header'

import { Container, Grid, Text, Button } from '@chakra-ui/react'

export default function Home({ courses }) {
  const [session, loading] = useSession()

  if (loading) return null

  if (!loading && !session)
    return (
      <Container>
        <Text fontSize="lg">Você não está logado</Text>
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
      </Container>
    )

  return (
    <Container maxW="container.lg">
      <Header />
      {session.id}
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        {courses.map((course) => (
          <Card key={course.id} course={course} />
          // <p key={course.id}>
          //   {course.name}
          //   <br />
          //   {course.courses.map((asd) => (
          //     <p>{asd.title}</p>
          //   ))}
          // </p>
        ))}
      </Grid>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env

  const session = await getSession(context)
  console.log(session)
  // const jwt = session.jwt

  // const res = await fetch(`${API_URL}/courses?_sort=id:DESC`, {
  //   headers: {
  //     Authorization: `Bearer ${jwt}`
  //   }
  // })

  // console.log(jwt)

  const res = await fetch(`${API_URL}/courses?_sort=id:DESC`)
  // const res = await fetch(`${API_URL}/classes?_sort=id:DESC`)
  const data = await res.json()

  return {
    props: {
      courses: data
    }
  }
}
