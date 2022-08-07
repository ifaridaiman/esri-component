import React from 'react'
import { Search } from '@mui/icons-material'
import './SearchInput.module.css'

type Props = {
    placeholder:string,
    createOnChange:React.ChangeEventHandler<HTMLInputElement>
}

const SearchInput:React.FC<Props> = ({
    placeholder,
    createOnChange
}) => {
    return (
        <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <Search/>
                    </button>
                </span>
                <input type="search" onChange={ createOnChange }  name={'searchItem'} className="w-full py-3 text-sm text-white border border-gray rounded-md pl-10 pr-5 focus:outline-none focus:bg-white focus:text-gray-900" placeholder={placeholder} autoComplete="off" />
            </div>
    )
}

export default SearchInput