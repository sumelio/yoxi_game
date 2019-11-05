import React, { Component } from "react";

import './index.css'

class Vowel extends Component {
  render() {
    return (
      <div className="vowel">
        <div >
            {this.props.label}
        </div>
      </div>
    );
  }
}

export default Vowel;
