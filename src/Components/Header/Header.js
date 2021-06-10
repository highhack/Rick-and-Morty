import React from 'react';
import logo from '../../folder_UI/img.png'
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img alt={''} src={logo}/>
        </header>
    )
}

export default Header