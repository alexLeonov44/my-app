import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, onPostChangeActionCreator } from '../../Redux/state'

const MyPosts = (props) => {
    let postData = props.store.getState().profilePage.postData
    let newPostText = props.store.getState().profilePage.newPostText

    let postsElement = postData.map(p => <Post message={p.message} age={p.age} />)

    let addPost = () => {
        props.dispatch(addPostActionCreator())  //в обьект добавляется ТИП - ADD_POST и переходим в функцию addPostAction Creator
    }
    let onPostChange = (event) => {
        let text = event.target.value
        props.dispatch(onPostChangeActionCreator(text))  //в обьект добавляется ТИП - UPDATE_NEW_POST_TEXT и переходим в функцию onPostChangeActionCreator
    }

    return (
        <div className={classes.myPosts} >
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={newPostText} placeholder='enter your post' />
                <br />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}></div>
            {postsElement}
        </div>

    )
}

export default MyPosts