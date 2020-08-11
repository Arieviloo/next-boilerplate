import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS, Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor em frente ao um computador"
    />
  </S.Wrapper>
)

export default Main
