import React, { useState, useEffect } from 'react'
import {
    FaHeart,
    FaFolder,
    FaStar,
    FaGithubSquare,
    FaPoll,
} from 'react-icons/fa'

import { getUserInformations, getUserStars } from '../../services/api'

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
    Link,
} from './styles'

export default function UserProfileCard({ ...props }) {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [photo, setPhoto] = useState('')
    const [followers, setFollowers] = useState('')
    const [repositories, setRepositories] = useState('')
    const [stars, setStars] = useState('')
    const [htmlUrl, setHtmlUrl] = useState('')
    const [auth, setAuth] = useState(false)
    const [userToken] = useState(process.env.NEXT_PUBLIC_TOKEN_GIT)

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
            const authStr = 'Bearer '.concat(userToken)
            setAuth(authStr)

            async function searchUserInformations() {
                const response = await getUserInformations({
                    username,
                    authStr,
                })
                const {
                    name,
                    avatar_url,
                    html_url,
                    followers: followersQty,
                    public_repos: reposQty,
                } = response.data

                setName(name)
                setPhoto(avatar_url)
                setHtmlUrl(html_url)
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
                const { data } = await getUserStars({
                    username,
                    authStr,
                })
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
                        <Link
                            href={htmlUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare size={40} color="var(--icon)" />
                        </Link>

                        <FaPoll size={40} color="var(--icon-search)" />
                    </IconBlock>
                </Card>
            )}
        </Container>
    )
}
