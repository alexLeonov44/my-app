import React from 'react';
import logo from './logo.svg';
import './App.css';


const  App = () => {
  return (
    <div className='app-wrapper'>
     <header className='header'>
       <div>
        <img src ='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'/>
        </div>
     </header> 
     <nav className='nav'>
        <div>
          profile
        </div>
        <div>
          message
        </div>
        <div>
          news
        </div>
        <div>
          music
        </div>
        <div>
          setting
        </div>
     </nav>
     <div className='content'>
        <div>
          <img src ="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"/>
        </div>

        <div>
          ava + description
        </div>

        <div>
          posts
          <div>
            new posts
          </div>
        </div>

        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
          <div>
            post 3
          </div>
        </div>

     </div>
    </div>
  );
}





export default App;
