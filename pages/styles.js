import styled from 'styled-components'
import Container from '@material-ui/core/Container'

const Main = styled(Container)`
  position: relative;
  z-index: 1;
`

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  img {
    width: 200px;
  }

  p {
    margin-top: 30px;
    color: #FFFFFF;
    text-align: center;
    font-size: 22px;
  }
`

const ErrorMessage = styled.div`
  padding: 10px 0;
  color: var(--white);
`

export {
  Main,
  Center,
  ErrorMessage,
}