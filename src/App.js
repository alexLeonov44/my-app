import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          {/* <Route path='/news' component={News} /> */}
          {/* <Route path='/music' component={Music} /> */}
          {/* <Route path='/setting' component={Setting} /> */}

        </div>
      </div>
    </BrowserRouter>
  )
}





export default App;
