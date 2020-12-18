import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

export const Main = styled(Container)`
  position: relative;
  z-index: 1;
`
export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  img {
    width: 150px;
  }

  p {
    margin-top: 30px;
    color: #FFFFFF;
    text-align: center;
    font-size: 22px;
  }
`

export const AboutPage = styled(Container)`
  position: relative;
  z-index: 1;

  h1 {
    color: #FFFFFF;
  }

  p {
    color: #AEAEAE;
  }
`
export const CardGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .info-card {
    margin: 16px 0;
    flex-basis: 420px;
  }
`

export const BackButton = styled(Button)`
  &.back {
    min-width: 60px;
    padding: 4px 4px;
    font-size: 36px;
    color: white;
    text-transform: none;

    &:hover {
      background-color: var(--hover);
    }
  }
`
