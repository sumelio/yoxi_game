import React, { Component } from "react";

import "./index.css";

class Vowel extends Component {
  render() {
    return (
      <div className="content-menu-item">
        <img src={this.props.vowel} className="yoxi-vowel" alt="a" />
      </div>
    );
  }
}

export default Vowel;
