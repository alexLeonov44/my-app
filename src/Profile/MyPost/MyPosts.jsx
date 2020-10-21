import React from 'react';
import classes from './MyPosts.module.css';   
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.postData.map(p => <Post message={p.message} age={p.age} />)  

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPosts(text)
        newPostElement.current.value = ""
    }

    return (
        <div className={classes.myPosts} >
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} ></textarea>
                <br />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}></div>
            {postsElement}
        </div>

    )
}

export default MyPosts