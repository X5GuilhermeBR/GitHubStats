import React from 'react'
import {
  FaHeart,
  FaFolder,
  FaStar,
  FaGithubSquare,
  FaPoll,
} from 'react-icons/fa'

import {
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
} from './styles'

export default function UserProfileCard({ ...props }) {
  const {
    name,
    username,
    photo,
    followers,
    repositories,
    stars,
    titleColor,
    userColor,
    statsColor,
    cardBackground,
    cardBoxShadow,
    cardDisplay,
    imageBorderRadius,
    statsMargin,
    statsDisplay,
    iconColor,
    iconBlock,
  } = props

  return (
    <Container>
      <Card
        background={cardBackground}
        boxShadow={cardBoxShadow}
        cardDisplay={cardDisplay}
      >
        <Image
          src={photo}
          alt={`Imagem do usuário ${name} ${username}`}
          borderRadius={imageBorderRadius}
        />

        <UserInformation>
          <Title titleColor={titleColor}>{name}</Title>
          <Text titleColor={userColor}>{username}</Text>

          <Stats statsDisplay={statsDisplay}>
            <Followers
              statsMargin={statsMargin}
              statsColor={statsColor}
            >
              <FaHeart size={24} color={iconColor} />
              {followers}
            </Followers>

            <Repo
              statsMargin={statsMargin}
              statsColor={statsColor}
            >
              <FaFolder size={24} color={iconColor} />
              {repositories}
            </Repo>

            <Stars
              statsMargin={statsMargin}
              statsColor={statsColor}
            >
              <FaStar size={24} color={iconColor} />
              {stars}
            </Stars>
          </Stats>
        </UserInformation>

        <IconBlock show={iconBlock}>
          <FaGithubSquare size={40} color="#24292E" />

          <FaPoll size={40} color="#F05454" />
        </IconBlock>
      </Card>
    </Container>
  )
}
