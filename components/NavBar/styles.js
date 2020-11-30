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
            background-color: #2f3846;
        }
    }
`

export const Button = styled(NewButton)`
    &.navButton {
        color: white;
        text-transform: none;
        padding: 4px 8px;
        margin-right: 20px;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;

        &:hover {
            background-color: #2f3846;
        }
    }
`
