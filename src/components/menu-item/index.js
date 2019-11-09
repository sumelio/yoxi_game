import React, { Component } from "react";
import { Link } from "react-router-dom";
import UIfx from "uifx";

import EnterAudio from "../../assets/sound/enter.mp3";

import './index.css'

class MenuItem extends Component {
  componentDidMount() {
    this.enterAudio = new UIfx(EnterAudio, { volume: 1.0 });
  }
  handleOnClickEnter = event => {
    this.enterAudio.play(1.0);
  };
  render() {
    return (
      <div className="round-button">
        <div className="round-button-circle">
          <Link onClick={this.handleOnClickEnter} className="round-button" to={this.props.go}>
            {this.props.label}
          </Link>
        </div>
      </div>
    );
  }
}

export default MenuItem;
