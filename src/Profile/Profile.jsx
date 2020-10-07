import React from 'react';
import MyPosts from './MyPost/MyPosts';
import classes from './Profile.module.css';


const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.image}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" />
            </div>

            <div>
                ava + description
        </div>

           <MyPosts />

        </div>

    )
}

export default Profile