import React, { Component } from "react";
import Popup from "reactjs-popup";

import "./index.css";

class Modal extends Component {
  render() {
    return (
      <Popup
        trigger={<button>{this.props.trigger}</button>}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            {this.props.children}
          </div>
        )}
      </Popup>
    );
  }
}
export default Modal;
