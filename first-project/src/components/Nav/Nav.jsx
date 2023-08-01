import React from 'react'
import List from '../List/List'

export const Nav = () => {
    return (
        <nav>
            <ul>
                <List name="Home" />
                <List name="About" />
                <List name="Services" />
                <List name="Portafolio" />
                <List name="Contact" />
            </ul>
        </nav>
    )
}

export default Nav