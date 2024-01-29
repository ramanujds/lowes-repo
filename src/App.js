import './App.css';
import React from 'react';
import Greet from './components/Greet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

 // Greet('Hello World');

 console.log("App Rednered")

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
         <Header/>
        </div>
        <div className='col-12'>
          <Body/>
        </div>
        <div className='col-12'>
        <Footer/>
      </div>
    </div>
  </div>
  );
}

export default App;
