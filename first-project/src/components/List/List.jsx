import React from 'react'
import { NavLink } from 'react-router-dom'

export const List = ({name, path}) => {
    return (
        <li className='text-white'><NavLink to={path}>{name}</NavLink></li>
    
    )
}

export default List