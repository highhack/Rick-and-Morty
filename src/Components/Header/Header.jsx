import React from 'react';
import logo from '../../folder_UI/img.png'
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className={s.header}>
                <img alt={''} src={logo}/>
            </div>
            <nav className={s.nav}>
                <div className = {s.item}>
                    <NavLink to = '/Characters' activeClassName = {s.active}>Characters</NavLink>
                </div>
                <div className = {s.item}>
                    <NavLink to = '/Episodes' activeClassName = {s.active}>Episodes</NavLink>
                </div>
                <div className = {s.item}>
                    <NavLink to = '/Locations' activeClassName = {s.active}>Locations</NavLink>
                </div>
                <div className = {s.item}>
                    <NavLink to = '/MyWatchList' activeClassName = {s.active}>My Watch List</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header