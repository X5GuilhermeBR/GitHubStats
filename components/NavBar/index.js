import React from 'react'
import { Menu, Button } from './styles'

const NavBar = () => {
  return (
    <Menu>
      <ul>
        <li>
          <img src={'./../../public/images/logo.png'} alt="Github Stats"/>
        </li>

        <li>
          <Button className="navButton">Sobre</Button>
        </li>
      </ul>
    </Menu>
  )
}

export default NavBar
