import React from 'react';
import classes from './MyPosts.module.css';   //везде один названия !!!
import Post from './Post/Post';

let postsData = [
    { message: 'hi first post' },
    { message: 'hi srcond post' },
    { message: 'its third post' },
]

let postsElement = postsData.map(p => <Post message={p.message} />)

const MyPosts = () => {
    return (
        <div className={classes.myPosts} >
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <br />
                <button>Add post</button>
            </div>


            <div className={classes.posts}></div>
            {postsElement}
        </div>

    )
}

export default MyPosts