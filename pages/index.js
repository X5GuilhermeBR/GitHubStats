import React from 'react'
import NavBar from '../components/NavBar/index'
import { Main } from './styles'
import { Container } from '@material-ui/core'

const Home = () => {
    return (
        <Main>
            <Container maxWidth="lg">
                <NavBar />
            </Container>
        </Main>
    )
}

export default Home
