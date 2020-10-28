import React from 'react';
import MyPosts from './MyPost/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts postData={props.postData} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />

        </div>

    )
}

export default Profile