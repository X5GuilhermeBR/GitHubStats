import React from 'react'
import { Input, Div, MdPerson, IoSearchSharp } from './styles'

const SearchBar = () => {
    return (
        <Div>
            <MdPerson />
            <Input
                placeholder="Search a user..."
                disableUnderline={true}
            ></Input>
            <button>
                <IoSearchSharp />
            </button>
        </Div>
    )
}

export default SearchBar
