import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from '../search/Search'
import './Header.css'


export const Header = () => {
    return (
        <header className='content-header'>
            <div>
            <Link to="/" className='logo'>
                Movies
            </Link>
            </div>
            
            <Search />
        </header>
    )
}
