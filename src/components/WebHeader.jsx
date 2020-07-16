  
import React, { Component } from "react";


class WebHeader extends Component {
  render() {
    return (
      <>
        <nav class="web-container br">
            <section class="top-bar br flex sb">
              <div class="top-bar-title br">Sopranos</div>
              <div class="exit-container br flex sb">
                <div class="box">
                  <img src="" alt=""/>
                </div>
                <div class="box"></div>
              </div>
            </section>
            <section class="nav-bar br">
              <div class="sec-one br">
                <box>                 
                </box>
                <box>                 
                </box>
                <box>                 
                </box>
              </div>
              <div class="sec-two br">
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