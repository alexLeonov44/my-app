import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';



const Message = (props) => {  // пропс читает сообщения
    return (
        <div className={classes.message}>{props.message}</div>
    )

}



export default Message