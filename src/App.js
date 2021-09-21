import React, { Component } from 'react';
import NewsItemList from './components/NewsItemList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <NewsItemList />
    );
  }
}

export default App;
