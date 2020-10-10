import React from 'react';
import classes from './MyPosts.module.css';   //везде один названия !!!
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div >
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>


            <div className={classes.posts}></div>
            <Post message='hi,are' />
            <Post message ='my first' />
            <Post age='28' />


        </div>

    )
}

export default MyPosts