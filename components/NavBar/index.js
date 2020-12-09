import React from 'react'
import { Menu, Button, Logo } from './styles'
import LogoPNG from '../../public/images/logo_side.png'

const NavBar = () => {
  return (
    <Menu>
      <ul>
        <li>
          <a href="/">
            <Logo
              src={LogoPNG}
              alt="Github Stats"
            />
          </a>

          <img />
        </li>

        <li>
          <Button className="navButton">Sobre</Button>
        </li>
      </ul>
    </Menu>
  )
}

export default NavBar
