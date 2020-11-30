import React from 'react'
import NavBar from '../components/NavBar/index'
import SearchBar from '../components/SearchBar/index'
import UserProfileCard from '../components/UserProfileCard'
import Main from './styles'

const Home = () => {
  return (
    <div>
      <Main>
        <NavBar />
        <SearchBar />

        <UserProfileCard
          name="Rafael Paes"
          username="@paesrafael"
          photo="https://avatars3.githubusercontent.com/u/46358065?s=110"
          followers="100 seguidores"
          repositories="50 repositórios"
          stars="20 stars"
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
      </Main>
    </div>
  )
}

export default Home
