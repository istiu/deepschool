import { Container, Box, Heading, Text } from '@chakra-ui/react'
import Header from 'components/Header'

export default function Lesson({ lesson }) {
  return (
    <Container maxW="container.lg">
      <Header />

      <Box borderWidth="1px" borderRadius="md" p="6" mb="6">
        <Heading as="h2" size="xl" mb="2" color="purple.700">
          {lesson.title}
        </Heading>
        <Text>{lesson.body}</Text>
      </Box>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  const { slug } = context.query

  const res = await fetch(`${API_URL}/lessons?slug=${slug}`)
  const data = await res.json()

  return {
    props: {
      lesson: data[0]
    }
  }
}
