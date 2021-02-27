export type categoryProps = {
  id: number
  name: string
  slug: string
  created_at: Date
  updated_at: Date
}

export type courseProps = {
  id: number
  title: string
  slug: string
  description: string
  created_at: Date
  updated_at: Date
  thumbnail: string

  category: {
    name: string
  }
}

export type lessonProps = {
  id: number
  title: string
  slug: string
  body: string
  published_at: Date
  created_at: Date
  updated_at: Date
}

export type classProps = {
  id: number
  name: string
  created_at: Date
  updated_at: Date
}

// export type contentProps = {
//   courses: courseProps[]
//   categories: categoryProps[]
//   lessons: lessonProps[]
//   classes: classProps[]
// }
