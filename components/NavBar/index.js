import React from 'react'
import { Menu, Button } from './styles'

const NavBar = () => {
    return (
        <Menu>
            <ul>
                <li>
                    <a>GitHub Stats</a>
                </li>
                
                <li>
                    <Button className="navButton">Sobre</Button>
                </li>
            </ul>
        </Menu>
    )
}

export default NavBar
