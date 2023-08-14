import React from 'react'
import Nav from '../Nav/Nav'
import './Header.css'

export const Header = () => {
return (
    <header className='flex justify-between items-center w-full h-1/6 p-4 text-lg' >
    <h1 className='text-3xl text-white w-1 ml-20 '>Portafolio</h1>
    <Nav />
    </header>
)
}

export default Header