import React, { Component } from "react";

import "./index.css";
import UIfx from "uifx";

import IntroAudio from "../../assets/sound/intro.mp3";
import EnterAudio from "../../assets/sound/enter.mp3";
import yoxi from "../../assets/image/yoxi.png";

import { VOWELS } from "../../config/vowelGameData";
import { playSound } from "../../utils/audioManager";

import Vowel from "../../components/vowel";
import ButtonNext from "../../components/button-next";

class IntroPage extends Component {
  constructor() {
    super();
    this.handleOnClickYoxi = this.handleOnClickYoxi.bind(this);
  }

  handleOnClickYoxi() {
    this.enterAudio = new UIfx(EnterAudio, { volume: 1.0 });
    this.enterAudio.play(1.0);
    playSound(IntroAudio);
  }

  render() {
    return (
      <div>
        <h1>Aprendiendo con Yoxi</h1>
        <img
          onClick={this.handleOnClickYoxi}
          src={yoxi}
          className="yoxi-intro"
          alt="Yoxi"
        />
        <div className="content">
          <div className="content-menu">
            {VOWELS.map(v => (
              <Vowel
                key={v.start}
                vowel={v.img}
                id={v.start}
                vowelSound={v.vowelSound}
                size="200px"
              />
            ))}
            <ButtonNext go="/menu-game" />
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
