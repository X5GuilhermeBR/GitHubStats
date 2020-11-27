import styled from 'styled-components'
import { Input as NewInput } from '@material-ui/core'

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
    height: 52px;
    margin-top: 1px;
    padding: 10px;
    width: 45%;
`
