  
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
        <main>
          <WebHeader/>
          <Header/>
          <SubHeader/>
          <Main/>
          <Footer/>
        </main>
      </>
    );
  }
}

export default (HomePage);