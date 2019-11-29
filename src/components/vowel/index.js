import React, { Component } from "react";
import UIfx from "uifx";
import EnterAudio from "../../assets/sound/enter.mp3";
import Win from "../../assets/sound/win.mp3";
import starsGif from "../../assets/image/stars.gif";
import Fail from "../../assets/sound/fail.mp3";

import "./index.css";

class Vowel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWin: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.enterAudio = new UIfx(EnterAudio, { volume: 1.0 });
    this.enterAudio.play(1.0);
    document.getElementById(this.props.id).play();

    if (this.props.win && this.props.setWin) {
      setTimeout(() => {
        document.getElementById("win").play();
        this.props.setWin();
      }, 2000);
    } else {
      if (this.props.setFail) {
        setTimeout(() => {
          document.getElementById("fail").play();
          this.props.setFail();
        }, 2000);
      }
    }
  }
  render() {
    return (
      <div
        id={`${this.props.id}-content`}
        onClick={this.handleOnClick}
        className={`content-menu-item ${this.props.className}`}
      >
        <img
          src={this.props.vowel}
          className={`yoxi-vowel-${this.props.size}`}
          alt={this.props.vowel}
        />

        <audio id={this.props.id} name={this.props.id}>
          <source src={this.props.vowelSound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <audio id="win" name="win">
          <source src={Win} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="fail" name="fail">
          <source src={Fail} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Vowel;
