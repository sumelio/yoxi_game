import React, { Component } from "react";

import "./index.css";
import UIfx from "uifx";

import IntroAudio from "../../assets/sound/intro.mp3";
import EnterAudio from "../../assets/sound/enter.mp3";

import a from "../../assets/image/a.png";
import Asound from "../../assets/sound/Aa.mp3";
import e from "../../assets/image/e.png";
import Esound from "../../assets/sound/Ee.mp3";
import i from "../../assets/image/i.png";
import Isound from "../../assets/sound/Ii.mp3";
import o from "../../assets/image/o.png";
import Osound from "../../assets/sound/Oo.mp3";
import u from "../../assets/image/u.png";
import Usound from "../../assets/sound/Uu.mp3";
import yoxi from "../../assets/image/yoxi.png";

import Vowel from "../../components/vowel";
import ButtonNext from "../../components/button-next";

class IntroPage extends Component {

  constructor() {
    super();
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
  }
  componentDidMount() {}

  handleOnMouseOver(event) {
      this.enterAudio = new UIfx(EnterAudio, { volume: 1.0 });
      this.enterAudio.play(1.0);

     document.getElementById("IntroAudioId").play();
  }

  render() {
    return (
      <div >
        <img onClick={this.handleOnMouseOver} src={yoxi} className="yoxi-intro" alt="Yoxi" />
        <div className="content">
          <div className="content-menu">
            <Vowel vowel={a} id='a' vowelSound={Asound} />
            <Vowel vowel={e} id='e' vowelSound={Esound} />
            <Vowel vowel={i} id='i' vowelSound={Isound} />
            <Vowel vowel={o} id='o' vowelSound={Osound} />
            <Vowel vowel={u} id='u' vowelSound={Usound} />
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
