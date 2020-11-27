import styled from 'styled-components'

export const Menu = styled.div`
    ul {
        list-style-type: none;
        overflow: hidden;
        background-color: #222831;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
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
