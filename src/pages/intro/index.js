import React, { Component } from "react";

import "./index.css";

import IntroAudio from "../../assets/sound/intro.mp3";

import a from "../../assets/image/a.png";
import e from "../../assets/image/e.png";
import i from "../../assets/image/i.png";
import o from "../../assets/image/o.png";
import u from "../../assets/image/u.png";
import yoxi from "../../assets/image/yoxi.png";

import Vowel from "../../components/vowel";
import ButtonNext from "../../components/button-next";

class IntroPage extends Component {
  state = {
    isPlaying: false
  };

  constructor() {
    super();
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
  }
  componentDidMount() {}

  handleOnMouseOver() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
      document.getElementById("IntroAudioId").play();
    }
  }

  render() {
    return (
      <div onMouseOver={this.handleOnMouseOver}>
        <img src={yoxi} className="yoxi" alt="Yoxi" />
        <div className="content">
          <div className="content-menu">
            <Vowel vowel={a} />
            <Vowel vowel={e} />
            <Vowel vowel={i} />
            <Vowel vowel={o} />
            <Vowel vowel={u} />
            <ButtonNext go="/menu-game" />
          </div>
          <audio id="IntroAudioId" name="IntroAudioId">
            <source src={IntroAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    );
  }
}

export default IntroPage;
