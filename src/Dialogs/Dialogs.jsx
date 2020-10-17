import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItem/DialogsItem'
import Message from './Message/Message'








const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map(d => <DialogsItems name={d.name} id={d.id} />)  //метод мап функия прог по циклу 
    let messagesElement = props.messagesData.map(m => <Message message={m.message} />)
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