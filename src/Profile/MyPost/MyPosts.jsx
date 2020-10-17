import React from 'react';
import classes from './MyPosts.module.css';   //везде один названия !!!
import Post from './Post/Post';





const MyPosts = (props) => {

    let postsElement = props.postData.map(p => <Post message={p.message} age={p.age}/>)  //постс дата (постс) через пропс передан выше 
   
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