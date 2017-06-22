import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

import Navi from './components/Home/Navi';
import Special from './components/Home/Special';
import HomeHeader from './components/Home/HomeHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi/>
        <HomeHeader/>
        <Special/>
      </div>
    );
  }
}

export default App;
