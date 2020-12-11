import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import HeadHtml from '../components/Head/index'
import NavBar from '../components/NavBar/index'
import SearchBar from '../components/SearchBar/index'
import UserProfileCard from '../components/UserProfileCard'

import Logo from '../public/images/logo.png'

import {
  searchUsersGithub,
  setLocalStorageUsersItems,
  getLocalStorageUsersItems,
} from '../services/api'

import {
  Main,
  Center,
  ErrorMessage,
} from './styles'

const Home = () => {
  const [username, setUsername] = useState(false)
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const [auth, setAuth] = useState(false)
  const [userToken] = useState(process.env.NEXT_PUBLIC_TOKEN_GIT)
  const [error, setError] = useState('')

  const loadingGif = '/images/loading-stats.gif'

  useEffect(() => {
    getLocalStorageUsersItems().then(function (items) {
      if (items !== null) {
        setProfiles(items)
        setLoading(true)
      }
    })
  }, [])

  const updateInputValue = (evt) => {
    setUsername(evt.target.value)
  }

  const searchUser = async (evt, username) => {
    evt.preventDefault()

    setError('')

    if (!username) {
      setError('Preencha o campo de pesquisa.')
    } else {
      setSearchLoading(true)

      const authStr = 'Bearer '.concat(userToken)
      setAuth(authStr)

      const { data } = await searchUsersGithub({ username, authStr })
      const { items } = data

      if (items.length < 1) {
        setError('Nenhum usuário encontrado.')
      }

      setProfiles(items)
      setLocalStorageUsersItems(items)

      if (items) {
        setLoading(true)
        setSearchLoading(false)
      }
    }
  }

  return (
    <Main maxWidth="md">
      <HeadHtml />

      <NavBar />
      
      <Center>
        <img src={Logo} alt="Github Stats Logo"></img>
        <p>Busque por um usuário e veja seus números do Github</p>
      </Center>

      <SearchBar
        handleClick={(evt) => searchUser(evt, username)}
        updateInputValue={(evt) => updateInputValue(evt)}
        username={username}
      />

      {!!error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}

      {!!searchLoading ? (
        <Image
          src={loadingGif}
          alt="Carregando informações"
          width="65px"
          height="65px"
        />
      ) : (
        !!loading &&
        !!profiles &&
          profiles.map((item) => (
            <UserProfileCard
              key={item.id}
              login={item.login}
              titleColor="#000000"
              userColor="#9B9B9B"
              statsColor="#000000"
              cardBackground="#EFEFEF"
              cardBoxShadow="3px 3px 6px rgba(0, 0, 0, 0.2)"
              cardDisplay="flex"
              imageBorderRadius="12px 0 0 12px"
              statsDisplay="flex"
              iconColor="#000000"
              iconBlock="show"
            />
          )
        )
      )}
    </Main>
  )
}

export default Home
