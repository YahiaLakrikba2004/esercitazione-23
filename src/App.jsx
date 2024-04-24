import React from 'react';
import './App.css';
import MyFooter from './components/FooterComponent';
import MyNav from './components/NavbarComponent';
import Welcome from './components/AlertComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import AllTheBooks from './components/AllBooksComponent';


function App() {
  return (
    <div className="App">
      <MyNav/>
      <div className="search-bar-container">
        
      </div>
      <header className="App-header">
        <Welcome/>
        <AllTheBooks/>
      </header>
      <MyFooter/>
    </div>
  );
}

export default App;
