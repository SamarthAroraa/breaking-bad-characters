import React from 'react'
import './header.styles.scss'
import logo from '../../../assets/images/title.png'

const Header = () => {
    return (
        <header className="center">
            <img src={logo} alt="Breaking bad logo"/>
        </header>
    )
}

export default Header
