import styled from 'styled-components'
import { Button as NewButton } from '@material-ui/core'

export const Menu = styled.div`
    margin: 30px 0 30px 0;

    ul {
        font-size: 16px;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
    }

    li {
        float: left;
    }

    li a {
        padding: 14px 16px;
        color: white;
        text-align: center;
        display: block;

        &:hover {
            background-color: var(--hover);
        }
    }
`

export const Button = styled(NewButton)`
    &.navButton {
        padding: 4px 8px;
        margin-right: 20px;
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
