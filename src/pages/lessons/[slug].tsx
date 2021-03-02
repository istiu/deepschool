import Container from 'components/Container'
import Header from 'components/Header'

export default function Lesson({ lesson }) {
  return (
    <Container>
      <Header />

      <h2>{lesson.title}</h2>
      <p>{lesson.body}</p>
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
