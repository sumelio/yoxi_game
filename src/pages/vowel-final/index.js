import React, { Component } from "react";

import VowelFinalAudio from "../../assets/sound/vowel-final.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
import yoxi from "../../assets/image/yoxi.png";
import Duck from "../../assets/image/duck.png";
import greenA from "../../assets/image/a-green.png";
import greenE from "../../assets/image/e-green.png";
import greenI from "../../assets/image/i-green.png";
import greenO from "../../assets/image/o-green.png";
import greenU from "../../assets/image/u-green.png";

import Asound from "../../assets/sound/Aa.mp3";
import Esound from "../../assets/sound/Ee.mp3";
import Isound from "../../assets/sound/Ii.mp3";
import Osound from "../../assets/sound/Oo.mp3";
import Usound from "../../assets/sound/Uu.mp3";

import duck from "../../assets/sound/duck.mp3";

import ButtonNext from "../../components/button-next";
import Vowel from "../../components/vowel";
import starsGif from "../../assets/image/stars.gif";

import { playSound } from "../../utils/audioManager";

class VowelFinal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWin: false
    };
    this.setWin = this.setWin.bind(this);
    this.setFail = this.setFail.bind(this);
  }

  componentDidMount() {
    playSound(VowelFinalAudio);
  }

  handleOnClickYoxi = () => {
    playSound(VowelFinalAudio);
  };

  handleOnClickDuck = () => {
    playSound(duck);
  };

  setWin() {
    this.setState({ showWin: true });
  }

  setFail() {
    this.setState({ showWin: false });
  }

  render() {
    return (
      <React.Fragment>
        <div className="content-menu vowel-start-time">
          <h1>
            <img
              onClick={this.handleOnClickYoxi}
              src={yoxi}
              className="yoxi-vowel-start"
              alt="Yoxi"
            />
            VOCAL FINAL
          </h1>
        </div>
        <div className="content-start-vowel-stauff">
          {this.state.showWin && (
            <img src={starsGif} className="yoxi-vowel-start" alt="Estrellas" />
          )}
          <img
            className="stuff-img"
            onClick={this.handleOnClickDuck}
            src={Duck}
            alt="Pato"
          />
          {this.state.showWin && (
            <img src={starsGif} className="yoxi-vowel-start" alt="Estrellas" />
          )}
        </div>
        <div className="content-start-vowel">
          <Vowel
            vowel={greenA}
            id="a"
            vowelSound={Asound}
            size="100px"
            setFail={this.setFail}
          />
          <Vowel
            vowel={greenE}
            id="e"
            vowelSound={Esound}
            size="100px"
            setFail={this.setFail}
          />
          <Vowel
            vowel={greenI}
            id="i"
            vowelSound={Isound}
            size="100px"
            setFail={this.setFail}
          />
          <Vowel
            vowel={greenO}
            id="o"
            vowelSound={Osound}
            size="100px"
            setFail={this.setFail}
            setWin={this.setWin}
            win={true}
          />
          <Vowel
            vowel={greenU}
            id="u"
            vowelSound={Usound}
            size="100px"
            setFail={this.setFail}
          />
        </div>
        <div className="content-menu vowel-start">
          <ButtonBack go="/vowel-start-game" />
          <ButtonNext go="/vowel-start-game" />
        </div>
      </React.Fragment>
    );
  }
}

export default VowelFinal;
