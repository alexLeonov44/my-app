import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogsItems = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )

}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}

let dialogsData = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Petra' },
    { id: 3, name: 'Vano' },
]

let messagesData = [
    { message: 'hey from props alex' },
    { message: 'real fanny petra' },
    { message: 'fuck you vano' },
]

let dialogsElement = dialogsData.map(d => <DialogsItems name={d.name} id={d.id} />)  //метод мап функия прог по циклу 
let messagesElement = messagesData.map(m => <Message message={m.message} />)

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messagesElement}
            </div>

        </div>

    )
}

export default Dialogs