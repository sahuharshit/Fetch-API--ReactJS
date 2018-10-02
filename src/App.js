import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from "./components/footer";
import ApiCall from "./components/ApiCall";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <ApiCall/>
        <Footer/>
      </div>
    );
  }
}

export default App;
