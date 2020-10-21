import './index.css';
import state, { addPosts } from './Redux/state';
import { rerenderEntireTree } from './render';


rerenderEntireTree(state,addPosts)

