import React from 'react'
import { Menu, Button, Logo } from './styles'
import LogoSide from '../../public/images/logo_side.png'

const NavBar = () => {
  return (
    <Menu>
      <ul>
        <li>
          <a href="/">
            <Logo
              src={LogoSide}
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
