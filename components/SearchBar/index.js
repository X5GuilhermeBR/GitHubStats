import React from 'react'
import {
  Input,
  Button,
  Form,
  MdPerson,
  IoSearchSharp,
} from './styles'

const SearchBar = ({ handleClick, username, updateInputValue }) => (
  <Form>
    <MdPerson />

    <Input
      placeholder="Procure um usuário"
      disableUnderline={true}
      onChange={(evt) => updateInputValue(evt)}
    />

    <Button
      type="submit"
      className="search-button"
      onClick={(evt) => handleClick(evt, username)}
    >
      <IoSearchSharp />
    </Button>
  </Form>
)

export default SearchBar
