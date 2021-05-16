import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';


const Nav = () => {
    return (
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
    )
}

export default Nav