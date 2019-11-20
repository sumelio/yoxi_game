import React, { Component } from "react";

import VowelStartAudio from "../../assets/sound/vowel-first.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
import Vowel from "../../components/vowel";
import a from "../../assets/image/red-a.png";
import e from "../../assets/image/red-e.png";
import i from "../../assets/image/red-i.png";
import o from "../../assets/image/red-o.png";
import u from "../../assets/image/red-u.png";
import yoxi from "../../assets/image/yoxi.png";

class VowelStartGame extends Component {
  state = {
    vowels: [a, e, i, o, u]
  };

  constructor() {
    super();
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.getNext = this.getNext.bind(this);
  }
  componentDidMount() {}

  handleOnMouseOver = event => {
    document.getElementById("VowelStartAudioAId").play();
  };

  getNext() {
    const vowelCurrent = this.state.vowels[this.getRandomInt(0, 4)];
    console.log("vowelCurrent", vowelCurrent);
    return vowelCurrent;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    return (
      <React.Fragment>
        <div className="content-menu vowel-start-game">
          {this.getNext() && <Vowel vowel={this.getNext()} />}
        </div>
        <audio id="VowelStartAudioAId" name="VowelStartAudioAId">
          <source src={VowelStartAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </React.Fragment>
    );
  }
}

export default VowelStartGame;
