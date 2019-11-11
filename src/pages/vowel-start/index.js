import React, { Component } from "react";

import VowelStartAudio from "../../assets/sound/vowel-first.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
import Vowel from "../../components/vowel";
import a from "../../assets/image/a.png";
import e from "../../assets/image/e.png";
import i from "../../assets/image/i.png";
import o from "../../assets/image/o.png";
import u from "../../assets/image/u.png";
import yoxi from "../../assets/image/yoxi.png";

import RainBow from "../../assets/image/rainbow.png";
import RainBowAudio from "../../assets/sound/rainbow.mp3";
import textArcoiris from "../../assets/image/text-arcoiris.png";
import firstA from "../../assets/image/red-a.png";

import Magnet from "../../assets/image/magnet.png";
import MagentAudio from "../../assets/sound/magnet.mp3";
import textIman from "../../assets/image/text-iman.png";
import firstI from "../../assets/image/red-i.png";

import Bear from "../../assets/image/bear.png";
import BearAudio from "../../assets/sound/bear.mp4";
import textBear from "../../assets/image/text-bear.png";
import firstO from "../../assets/image/red-o.png";

import Elephan from "../../assets/image/elephan.png";
import ElephanAudio from "../../assets/sound/elephan.mp3";
import textElephan from "../../assets/image/text-elephan.png";
import firstE from "../../assets/image/red-e.png";

import ModalVowel from "../../components/modal-vowel";

class VowelStart extends Component {
  state = {
    isPlaying: false
  };

  componentDidMount() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
      document.getElementById("VowelStartAudioId").play();
    }
  }

  handleOnMouseOver = (event) => {
    document.getElementById("VowelStartAudioId").play();
  }

  render() {
    return (
      <React.Fragment>
        <div className="content-menu vowel-start-time">
        <h1><img onClick={this.handleOnMouseOver} src={yoxi} className="yoxi-vowel-start" alt="Yoxi" />
          VOCAL INICIAL</h1>
        </div>
        <div className="content-start-vowel-stauff">
          <ModalVowel
            id={RainBow}
            image={RainBow}
            audio={RainBowAudio}
            alt="Arcoíris"
            text={textArcoiris}
            firstVowel={firstA}
          />
          <ModalVowel
            id={Magnet}
            image={Magnet}
            audio={MagentAudio}
            alt="Iman"
            text={textIman}
            firstVowel={firstI}
          />

          <ModalVowel
            id={Bear}
            image={Bear}
            audio={BearAudio}
            alt="Oso"
            text={textBear}
            firstVowel={firstO}
          />

          <ModalVowel
            id={Elephan}
            image={Elephan}
            audio={ElephanAudio}
            alt="Elefante"
            text={textElephan}
            firstVowel={firstE}
          />
        </div>
        <div className="content-menu vowel-start">
          <ButtonBack go="/menu-game" />
          <Vowel vowel={a} />
          <Vowel vowel={e} />
          <Vowel vowel={i} />
          <Vowel vowel={o} />
          <Vowel vowel={u} />
        </div>
        <audio id="VowelStartAudioId" name="VowelStartAudioId">
          <source src={VowelStartAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </React.Fragment>
    );
  }
}

export default VowelStart;
