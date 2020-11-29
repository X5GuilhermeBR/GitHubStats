import styled from 'styled-components'
import { Button as NewButton } from '@material-ui/core'

export const Menu = styled.div`
    ul {
        list-style-type: none;
        overflow: hidden;
        background-color: #222831;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;

        &:hover {
            background-color: #111;
        }
    }
`

export const Button = styled(NewButton)`
    &.navButton {
        color: #E8E8E8;
        text-transform: none;
        padding: 4px 8px;
        font-size: 16px;
        &:hover {
            background-color: #2F3846
        }
    }
`