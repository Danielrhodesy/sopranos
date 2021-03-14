  
import React, { Component } from "react";
import WebHeader from "./components/WebHeader"
import Main from "./components/Main"
import Footer from "./components/Footer"

class HomePage extends Component {
  render() {
    return (
      <>
        <main>
          <WebHeader/>
          <Main/>
          <Footer/>
        </main>
      </>
    );
  }
}

export default (HomePage);