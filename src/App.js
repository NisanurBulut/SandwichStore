import './App.css';
import Layout from './hoc/Layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <Layout><SandwichBuilder /></Layout>;
  }
}


export default App;