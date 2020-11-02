// variable for potst
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//    variable for message
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let store = {


    _state: {
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
            ],
            newMessageText: ''
        }
    },
    _callsubscriber() {
        console.log('rerender pussy')
},

    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callsubscriber = observer
    },


    dispatch(action) {
        // dispatch for posts
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                age: 2
            }
            this._state.profilePage.newPostText = ''
            this._state.profilePage.postData.push(newPost)
            this._callsubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText  // newPostText теперь равен тексту из action
            this._callsubscriber(this._state)


        } else if (action.type === SEND_MESSAGE) {
            let message = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messagesData.push(
                { message: message }
            )
            this._callsubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text
            this._callsubscriber(this._state)
        }

    },

}
//   creators for posts!!
export let addPostActionCreator = () => ({ type: ADD_POST })
export let onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
//   creators for message!!!
export let sendMessageCreator = () => ({ type: SEND_MESSAGE  })
export let updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text })
export default store
// window.state = store