import React from 'react'
import {
    Input,
    Button,
    Div,
    MdPerson,
    IoSearchSharp,
} from './styles'

const SearchBar = ({ handleClick, username, updateInputValue }) => (
    <Div>
        <MdPerson />

        <Input
            placeholder="Search a user..."
            disableUnderline={true}
            onChange={(evt) => updateInputValue(evt)}
        />
        
        <Button
            className="search-button"
            onClick={(evt) => handleClick(evt, username)}
        >
            <IoSearchSharp />
        </Button>
    </Div>
)

export default SearchBar
