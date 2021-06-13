import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import image from "../../folder_UI/logo.jpg";


const Nav = () => {
    return (
        <div className={s.nav}>
            <nav className={s.navContainer}>
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
                <img alt={''} className={s.img} src={image}/>
            </nav>

        </div>

    )
}

export default Nav