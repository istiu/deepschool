import { ReactNode } from 'react'
import * as S from './styles'

interface Type {
  children: ReactNode
}

const Container = ({ children }: Type) => <S.Container>{children}</S.Container>

export default Container
