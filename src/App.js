import React, { Component } from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/Blog/Blog";
import BlogBoxes from "./components/BlogBoxes/BlogBoxes";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";

class App extends Component {

  render() {
    return (
      <div className="TextCenter">
        <Navbar />
        <Blog />
        <BlogBoxes />
        <Subscribe />
        <Footer />
      </div >
    );
  }
}

export default App;
