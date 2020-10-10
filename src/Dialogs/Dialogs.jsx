import React from 'react';
import classes from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Alex</div>
                <div className={classes.dialog}>Alex</div>
                <div className={classes.dialog}>Alex</div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>hey!!</div>
                <div className={classes.message}>hey!!</div>
                <div className={classes.message}>hey!!</div>
            </div>

        </div>

    )
}

export default Dialogs