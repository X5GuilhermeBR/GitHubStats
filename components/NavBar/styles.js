import styled from 'styled-components'
import { Button as NewButton } from '@material-ui/core'

export const Menu = styled.div`
    margin: 30px 0 30px 0;

    ul {
        font-size: 16px;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }

    li {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
    }

    li a {
        color: white;
        text-align: center;
        display: block;
    }
`

export const Button = styled(NewButton)`
    &.navButton {
        padding: 4px 8px;
        font-size: 16px;
        color: white;
        text-transform: none;

        &:hover {
            background-color: var(--hover);
        }
    }
`

export const Logo = styled.img`
  width: 150px;
`
