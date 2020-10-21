import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  console.log(Header)
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() =>
            <Profile postData={props.state.profilePage.postData} addPosts={props.addPosts}/>} />
          <Route path='/dialogs' render={() =>
            < Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData} />} />
          {/* <Route path='/news' render={News} /> */}
          {/* <Route path='/music' render={Music} /> */}
          {/* <Route path='/setting' render={Setting} /> */}

        </div>
      </div>
    </BrowserRouter>
  )
}





export default App;
