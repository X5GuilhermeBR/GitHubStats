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
  padding-bottom: 80px;

  h1 {
    color: #FFFFFF;
  }

  p {
    color: #AEAEAE;
  }
`
export const CardGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  .info-card {
    margin: 16px;
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

export const ServerCard = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);

  .image {
    border-radius: 50%;
    height: 75px;
    height: 75px;
  }

  h2 {
    margin-bottom: 6px;
  }

  .discord {
    display: flex;
    align-items: center;
    text-decoration: underline;
  }

  a {
    color: rgba(255, 255, 255, 0.4);
    margin-right: 10px;
  }
`

export const Section = styled.div`
  margin: 30px auto;

  h1 {
    margin-bottom: 30px;
  }

  h1.no-margin {
    margin-bottom: 0px;
  }

  p {
    font-size: 20px;
    text-align: justify;
  }
`
