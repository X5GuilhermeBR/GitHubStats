import React, { useState, useEffect } from 'react'
import {
  FaHeart,
  FaFolder,
  FaStar,
  FaGithubSquare,
  FaPoll,
} from 'react-icons/fa'

import {
  getUserInformations,
  getUserStars,
} from '../../services/api'

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
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [photo, setPhoto] = useState('')
  const [followers, setFollowers] = useState('')
  const [repositories, setRepositories] = useState('')
  const [stars, setStars] = useState('')

  const {
    login,
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

  useEffect(() => {
    setUsername(login)
  }, [])

  useEffect(() => {
    if (username) {
      async function searchUserInformations() {
        const response = await getUserInformations(username)
        const {
          name,
          avatar_url,
          followers: followersQty,
          public_repos: reposQty,
        } = response.data
  
        setName(name)
        setPhoto(avatar_url)
        if (followersQty > 1) {
          setFollowers(`${followersQty} seguidores`)
        } else {
          setFollowers(`${followersQty} seguidor`)
        }
        if (reposQty > 1) {
          setRepositories(`${reposQty} repositórios`)
        } else {
          setRepositories(`${reposQty} repositório`)
        }
      }
  
      searchUserInformations()
  
      async function searchUserStars() {
        const { data } = await getUserStars(username)
        const length = data.length
  
        if (length > 1) {
          setStars(`${length} stars`)
        } else {
          setStars(`${length} star`)
        }
      }
  
      searchUserStars()
    }
  }, [username])

  return (
    <Container>
      {!!username && (
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
            <Text titleColor={userColor}>@{username}</Text>

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
      )}
    </Container>
  )
}
