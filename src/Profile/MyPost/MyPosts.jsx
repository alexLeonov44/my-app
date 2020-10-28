import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.postData.map(p => <Post message={p.message} age={p.age} />)

    let newPostElement = React.createRef()

    let addPostsForMyPost = () => {
        props.addPost()
        newPostElement.current.value = "";
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.myPosts} >
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <br />
                <button onClick={addPostsForMyPost}>Add post</button>
            </div>
            <div className={classes.posts}></div>
            {postsElement}
        </div>

    )
}

export default MyPosts