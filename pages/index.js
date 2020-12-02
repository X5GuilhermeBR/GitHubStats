import React, { useEffect, useState } from 'react'

import HeadHtml from '../components/Head/index'
import NavBar from '../components/NavBar/index'
import SearchBar from '../components/SearchBar/index'
import UserProfileCard from '../components/UserProfileCard'

import {
    searchUsersGithub,
    setLocalStorageUsersItems,
    getLocalStorageUsersItems,
} from '../services/api'

import Main from './styles'

const Home = () => {
    const [username, setUsername] = useState(false)
    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getLocalStorageUsersItems()
        .then(function(items) {
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
        
        const { data } = await searchUsersGithub(username)
        const { items } = data
        
        setProfiles(items)
        setLocalStorageUsersItems(items)

        if (items) {
            setLoading(true)
        }
    }

    return (
        <Main maxWidth="md">
            <HeadHtml />

            <NavBar />

            <SearchBar
                handleClick={(evt) => searchUser(evt, username)}
                updateInputValue={(evt) => updateInputValue(evt)}
                username={username}
            />

            {!!loading && (
                !!profiles && (
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
                    ))
                )
            )}
        </Main>
    )
}

export default Home
