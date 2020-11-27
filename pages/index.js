import React from 'react'
import NavBar from '../components/NavBar/index'
import SearchBar from '../components/SearchBar/index'
import Main from './styles'

const Home = () => {
    return (
        <div>
            <Main>
                <NavBar />
                <SearchBar />
            </Main>
        </div>
    )
}

export default Home
