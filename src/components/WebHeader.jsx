  
import React, { Component } from "react";


class WebHeader extends Component {
  render() {
    return (
      <>
        <nav class="web-container">
            <section class="top-bar flex sb">
              <div class="top-bar-title">Sopranos</div>
              <div class="exit-container br flex sb">
                <div class="box">
                  <img src="../../public/icons/mini.ico" alt="Minimize Image"/>
                </div>
                <div class="box">
                  <img src="../../public/icons/maxi.ico" alt="Maximize Image"/>
                </div>
                <div class="box">
                  <img src="exit.png" alt="Exit Image"/>
                </div>
              </div>
            </section>
            <section class="nav-bar flex br">
              <div class="sec  flex">
                <box class="">                 
                </box>
                <box class="">                 
                </box>
                <box class="">                 
                </box>
              </div>
              <div class="sec-two br flex">
                <box>                 
                </box>
                <box>                 
                </box>
                <box>                 
                </box>
              </div>
            </section>
            <section class="search-bar br">
              <p>Send To</p>
              <div>
                Search...
              </div>
            </section>
            <section class="sub_nav br">
              <box>
                Item               
              </box>
                Item
              <box> 
                Item                
              </box>
                Item
              <box> 
                Item                
              </box>
            </section>
        </nav>
      </>
    );
  }
}
export default (WebHeader)