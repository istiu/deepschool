import * as S from './styles'
import Link from 'next/link'
import { courseProps } from 'types/courses'

type Props = {
  course: courseProps
}

export default function Card({ course }: Props) {
  return (
    <S.Card>
      <S.CardTitle>{course.title}</S.CardTitle>
      <S.CardLabel>{course.category.name}</S.CardLabel>
      <S.CardBody>{course.description}</S.CardBody>
      <Link
        prefetch
        passHref
        href="/courses/[slug]"
        as={`/courses/${course.slug}`}
      >
        <S.CardLink>Ver aulas</S.CardLink>
      </Link>
    </S.Card>
  )
}
