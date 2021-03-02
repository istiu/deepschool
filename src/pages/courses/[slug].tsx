import NextLink from 'next/link'

import {
  Container,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { MdPlayArrow } from 'react-icons/md'
import Header from 'components/Header'
import fetch from 'isomorphic-unfetch'

export default function Course({ course }) {
  return (
    <Container maxW="container.lg">
      <Header />
      <Box borderWidth="1px" borderRadius="md" p="6" mb="6">
        <Heading as="h2" size="xl" mb="2" color="purple.700">
          {course.title}
        </Heading>
        <Text>{course.description}</Text>
      </Box>

      <Box borderWidth="1px" borderRadius="md" p="6">
        <List spacing={3}>
          {course.lessons.map((lesson) => (
            <ListItem key={lesson.id}>
              <ListIcon as={MdPlayArrow} color="purple.700" />
              <NextLink
                prefetch
                passHref
                href="/lessons/[slug]"
                as={`/lessons/${lesson.slug}`}
              >
                <a>{lesson.title}</a>
              </NextLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  const { slug } = context.query

  const res = await fetch(`${API_URL}/courses?slug=${slug}`)
  const data = await res.json()

  return {
    props: {
      course: data[0]
    }
  }
}
