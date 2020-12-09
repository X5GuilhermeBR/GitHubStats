import styled, { css } from 'styled-components'

const Reset = css`
  margin: 0;
  padding: 0;
`

const Flex = css`
  display: flex;
  align-items: center;
`

const StatsCSS = css`
  margin: ${(props) => (props.statsMargin ? props.statsMargin : '0')};
  padding-right: 20px;
  color: ${(props) => (props.statsColor ? props.statsColor : 'var(--white)')};
  font-size: 14px;
`

const keyframes = css`
  @keyframes showCard {
    from {
      opacity: 0;
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`

const Container = styled.div`
  margin-top: 30px;
  display: block;
`

const Card = styled.div`
  border-radius: 12px;
  background-color: ${(props) => (props.background ? props.background : 'transparent')};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : 'none')};
  display: ${(props) => (props.cardDisplay ? props.cardDisplay : 'block')};
  justify-content: space-between;
  align-items: center;
  ${keyframes};
  animation: showCard 1000ms;

  @media (max-width: 768px) {
    padding: 25px 0 15px 0;
    text-align: center;
    display: block;
  }
`

const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};

  @media (max-width: 768px) {
    border-radius: 50%;
  }
`

const UserInformation = styled.div`
  padding-left: 20px;
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`

const Title = styled.h2`
  color: ${(props) => (props.titleColor ? props.titleColor : 'var(--white)')};
  font-size: 26px;
  ${Reset};
`

const Text = styled.p`
  color: ${(props) => (props.titleColor ? props.titleColor : 'var(--white)')};
  font-size: 18px;
  ${Reset};
`

const Stats = styled.div`
  margin: 15px 0 10px 0;
  display: ${(props) => (props.statsDisplay ? props.statsDisplay : 'block')};

  @media (max-width: 768px) {
    flex-direction: column;

    span {
      margin-bottom: 10px;
      justify-content: center;
    }
  }
`

const Followers = styled.span`
  ${StatsCSS};
  ${Flex};

  svg {
    padding-right: 5px;
  }
`

const Repo = styled.span`
  ${StatsCSS};
  ${Flex};

  svg {
    padding-right: 5px;
  }
`

const Stars = styled.span`
  ${StatsCSS};
  ${Flex};

  svg {
    padding-right: 5px;
  }
`

const IconBlock = styled.div`
  padding-right: 10px;
  display: ${(props) => (props.show ? 'flex' : 'none')};

  svg {
    margin: 5px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Link = styled.a`
  &:hover {
    svg {
      fill: var(--hover);
    }
  }

  &.statisc {
    &:hover {
      svg {
        fill: var(--hover-red);
      }
    }
  }
`

export {
  Container,
  Card,
  Image,
  UserInformation,
  Title,
  Text,
  Stats,
  Followers,
  Repo,
  Stars,
  IconBlock,
  Link,
}
