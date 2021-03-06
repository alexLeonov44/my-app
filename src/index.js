import './index.css';
import store  from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';



export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}  />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())
store.subscriber(rerenderEntireTree)

