import React from 'react'
import { Input, Button, Div, MdPerson, IoSearchSharp } from './styles'

const SearchBar = () => {
    return (
        <Div>
            <MdPerson />
            <Input
                placeholder="Search a user..."
                disableUnderline={true}
            ></Input>
            <Button className="search-icon">
                <IoSearchSharp />
            </Button>
        </Div>
    )
}

export default SearchBar
