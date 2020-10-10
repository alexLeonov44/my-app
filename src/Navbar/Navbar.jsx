import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/Profile' activeClassName={classes.activeLink}>profile</NavLink>
        </div>
            <div className= {classes.item} >
                <NavLink to='/Dialogs' activeClassName={classes.activeLink}>message</NavLink>
        </div>
            <div className={classes.item}>
                <a>news</a>
        </div>
            <div className={classes.item}>
                <a>music</a>
        </div>
            <div className={classes.item}>
                <a>setting</a>
        </div>
        </nav>
    )
}

export default Navbar