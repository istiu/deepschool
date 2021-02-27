import Container from 'components/Container'
import Header from 'components/Header'
import fetch from 'isomorphic-unfetch'

export default function Course({ course }) {
  return (
    <Container>
      <Header />
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <ul>
        {course.lessons.map((lesson) => (
          <li key={lesson.id}>- {lesson.title}</li>
        ))}
      </ul>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  const { slug } = context.query
  console.log(`${API_URL}/courses/${slug}`)

  const res = await fetch(`${API_URL}/courses?slug=${slug}`)
  const data = await res.json()

  return {
    props: {
      course: data[0]
    }
  }
}
