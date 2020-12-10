import styled from 'styled-components'
import {
    Input as NewInput,
    Button as NewButton,
} from '@material-ui/core'
import { MdPerson as CustomMdPerson } from 'react-icons/md'
import { IoSearchSharp as CustomIoSearchSharp } from 'react-icons/io5'

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled(NewInput)`
  padding: 10px;
  width: 100%;
  height: 55px;
  background-color: var(--white);
`

export const Button = styled(NewButton)`
  &.search-button {
    padding: 10px;
    max-width: 55px;
    max-height: 55px;
    border-radius: 0px 10px 10px 0px;
    background-color: var(--white);

    &:hover {
      background-color: var(--hover);
    }
  }
`

export const MdPerson = styled(CustomMdPerson)`
  padding-left: 10px;
  width: 30px;
  height: 55px;
  color: var(--tertiary);
  border-radius: 10px 0px 0px 10px;
  background-color: var(--white);
`

export const IoSearchSharp = styled(CustomIoSearchSharp)`
  width: 25px;
  height: 50px;
  color: var(--icon-search);
  background-color: transparent;
`
