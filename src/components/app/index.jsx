import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Footer from '../footer';
import Header from '../header';
import Content from '../content';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  return (
    <div className="app">   
    <Router>
      <div>
        <div className="container">
          <Header />
        </div>
        <div>
          <Content />
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    </Router>
  </div>
  );
}

export default App;
