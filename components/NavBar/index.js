import React from 'react'
import { Menu, Button, Logo } from './styles'
import LogoSide from '../../public/images/logo_side.png'

const NavBar = ({button=true}) => {
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
        </li>

        {button && (
          <li>
          <Button href="/about" className="navButton">Sobre</Button>
        </li>
        )}

      </ul>
    </Menu>
  )
}

export default NavBar
