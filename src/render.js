import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
// import { addPosts } from './Redux/state';


export let rerenderEntireTree = (state,addPosts) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPosts={addPosts} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
