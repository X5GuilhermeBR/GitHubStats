import styled from 'styled-components'
import Container from '@material-ui/core/Container'

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

export const InfoCard = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  align-items: center;
  background-color: rgba(174, 174, 174, .4);
  border-radius: 12px;
  overflow: hidden;

  .image {
    height: 100%;
  }

  .info-div {
    height: 100%;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .name, .description {
    color: #FFF;
  }

  .work, .local, .links a{
    color: #9B9B9B;
  }

  .local-info {
  }

  .local-info div{
    padding: 4px 0;
    display: flex;
    align-items: center;
  }

  .local-info div .icon {
    margin-right: 5px;
  }

  .links a {
    text-decoration: none;
  }

`
