import Card from 'components/Card'
// import Container from 'components/Container'
import Header from 'components/Header'

import { Container, Grid } from '@chakra-ui/react'

export default function Home({ courses }) {
  return (
    <Container maxW="container.lg">
      <Header />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        {courses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </Grid>
    </Container>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/courses?_sort=id:DESC`)
  const data = await res.json()

  return {
    props: {
      courses: data
    }
  }
}
