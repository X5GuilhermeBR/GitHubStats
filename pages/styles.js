import styled from 'styled-components'
import Container from '@material-ui/core/Container'

const Main = styled(Container)`
  position: relative;
  z-index: 1;
`

const ErrorMessage = styled.div`
  padding: 10px 0;
  color: var(--white);
`

export {
  Main,
  ErrorMessage,
}
