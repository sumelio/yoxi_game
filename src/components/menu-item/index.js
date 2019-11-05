import React, { Component } from "react";

import './index.css'

class MenuItem extends Component {
  render() {
    return (
      <div className="round-button">
        <div className="round-button-circle">
          <a href="http://example.com" className="round-button">
            {this.props.label}
          </a>
        </div>
      </div>
    );
  }
}

export default MenuItem;
