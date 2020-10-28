import { rerenderEntireTree } from "../render"

let state = {
    profilePage: {
        postData: [
            { id: 1, message: 'hi first post', age: 23 },
            { id: 2, message: 'hi srcond post', age: 23 },
            { id: 3, message: 'its third post', age: 23 },
        ],
        newPostText:''
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Petra' },
            { id: 3, name: 'Vano' },
        ],
        messagesData: [
            { message: 'hey from props alex' },
            { message: 'real fanny petra' },
            { message: 'fuck you vano' },
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message:state.profilePage.newPostText ,
        age: 2
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state