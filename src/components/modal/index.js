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
            <button
              type="button"
              className="close"
              onClick={close}
              aria-label="Cerrar"
            >
              &times;
            </button>
            {this.props.children}
          </div>
        )}
      </Popup>
    );
  }
}
export default Modal;
