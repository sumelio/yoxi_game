import React, { Component } from "react";
import UIfx from "uifx";
import EnterAudio from "../../assets/sound/enter.mp3"; 

import "./index.css";

class Vowel extends Component {

  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.enterAudio = new UIfx(EnterAudio, { volume: 1.0 });
    this.enterAudio.play(1.0);
    document.getElementById(this.props.id).play();
  }
  render() {
    return (
      <div id={`${this.props.id}-content`} onClick={this.handleOnClick} className={`content-menu-item ${this.props.className}`}>
        <img src={this.props.vowel} className={`yoxi-vowel-${this.props.size}`} alt={this.props.vowel} />
        <audio  id={this.props.id} name={this.props.id}>
          <source src={this.props.vowelSound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Vowel;
