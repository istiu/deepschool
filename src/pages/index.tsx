import Card from 'components/Card'
import Container from 'components/Container'
import Header from 'components/Header'

export default function Home({ courses }) {
  return (
    <Container>
      <Header />
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
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
