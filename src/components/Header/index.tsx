import Link from 'next/link'
import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <S.Title>
        <Link href="/">
          <a>DeepSchool</a>
        </Link>
      </S.Title>
    </S.Header>
  )
}
