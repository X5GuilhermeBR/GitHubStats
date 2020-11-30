import React, { useState } from 'react'
import NavBar from '../components/NavBar/index'
import SearchBar from '../components/SearchBar/index'
import UserProfileCard from '../components/UserProfileCard'
import Main from './styles'
import HeadHtml from '../components/Head/index'
import { searchUsersGithub } from '../services/api'

const Home = () => {
    const [username, setUsername] = useState(false)
    const [result, setResult] = useState(false)

    const updateInputValue = (evt) => {
        setUsername(evt.target.value)
        console.log(username)
    }

    const searchUser = async (evt, username) => {
        evt.preventDefault()
        const { data } = await searchUsersGithub(username)
        setResult(data.itemms)
        console.log(data.items)
        localStorage.setItem('Users', JSON.stringify(data.items))
    }

    return (
        <div>
            <HeadHtml />
            <Main>
                <NavBar />
                <SearchBar
                    handleClick={(evt) => searchUser(evt, username)}
                    updateInputValue={(evt) => updateInputValue(evt)}
                    username={username}
                />

                {result !== false && (
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
                )}
            </Main>
        </div>
    )
}

export default Home
