import React from 'react'
import { Menu, Button } from './styles'

const NavBar = () => {
    return (
        <div>
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
        </div>
    )
}

export default NavBar
