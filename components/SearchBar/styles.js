import styled from 'styled-components'
import { Input as NewInput } from '@material-ui/core'
import { Button as NewButton } from '@material-ui/core'
import { MdPerson as CustomMdPerson } from 'react-icons/md'
import { IoSearchSharp as CustomIoSearchSharp } from 'react-icons/io5'

export const Div = styled.div`
    position: relative;
    top: 50%;
    height: 100px;
    margin-top: -200px;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const Input = styled(NewInput)`
    background-color: whitesmoke;
    height: 55px;
    padding: 10px;
    width: 42%;
`

export const Button = styled(NewButton)`
    &.search-button {
        border: none;
        background-color: whitesmoke;
        border-radius: 0px 10px 10px 0px;
        max-height: 55px;
        max-width: 55px;
        padding: 10px;

        &:hover {
            background-color: grey;
        }
    }
`

export const MdPerson = styled(CustomMdPerson)`
    color: #b4b4b4;
    background-color: whitesmoke;
    width: 30px;
    height: 55px;
    padding-left: 10px;
    border-radius: 10px 0px 0px 10px;
`

export const IoSearchSharp = styled(CustomIoSearchSharp)`
    background-color: transparent;
    color: #f05454;
    width: 25px;
    height: 50px;
`
