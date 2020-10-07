import React from 'react';
import classes from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav}>
                profile
        </div>
            <div className={`${classes.nav} ${classes.active}`} >
                message
        </div>
            <div className={classes.nav}>
                news
        </div>
            <div className={classes.nav}>
                music
        </div>
            <div className={classes.nav}>
                setting
        </div>
        </nav>
    )
}

export default Navbar