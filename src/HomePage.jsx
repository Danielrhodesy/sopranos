  
import React, { Component } from "react";
import WebHeader from "./components/WebHeader"
import Header from "./components/Header"
import SubHeader from './components/SubHeader'
import Main from "./components/Main"
import Footer from "./components/Footer"

class HomePage extends Component {
  render() {
    return (
      <>
        <WebHeader/>
        <Header/>
        <SubHeader/>
        <Main/>
        <Footer/>
      </>
    );
  }
}

export default (HomePage);