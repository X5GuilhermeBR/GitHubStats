import React from 'react'
import { Input, Div } from './styles'
import { MdPerson } from 'react-icons/md'
import { IoSearchSharp } from 'react-icons/io5'

const SearchBar = () => {
    return (
        <Div>
            <MdPerson
                style={{
                    backgroundColor: 'whitesmoke',
                    color: 'B4B4B4 ',
                    width: '30px',
                    height: '52px',
                    paddingLeft: '10px',
                    borderRadius: '10px 0px 0px 10px',
                }}
            />
            <Input
                placeholder="Search a user..."
                disableUnderline={true}
            ></Input>
            <button
                style={{
                    border: 'none',
                    backgroundColor: 'white',
                    borderRadius: '0px 10px 10px 0px',
                }}
            >
                <IoSearchSharp
                    style={{
                        backgroundColor: 'whitesmoke',
                        color: 'B4B4B4 ',
                        width: '25px',
                        height: '47px',
                    }}
                />
            </button>
        </Div>
    )
}

export default SearchBar
