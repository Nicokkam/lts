import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar/NavBar';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />        
        <MainContainer />
      </div>
    );
  }
}

export default App;
