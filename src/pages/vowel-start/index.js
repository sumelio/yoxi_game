import React, { Component } from "react";

import VowelStartAudio from "../../assets/sound/vowel-first.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
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

import Grapes from "../../assets/image/grapes.png";
import GrapesAudio from "../../assets/sound/grapes.mp3";
import textGrapes from "../../assets/image/text-grapes.png";
import firstU from "../../assets/image/red-u.png";

import Uniform from "../../assets/image/uniform.jpeg";
import UniformAudio from "../../assets/sound/uniform.mp3";
import textUniform from "../../assets/image/text-uniform.png";

import Sheep from "../../assets/image/sheep.png";
import SheepAudio from "../../assets/sound/sheep.mp3";
import textSheep from "../../assets/image/text-sheep.png";
import firstOup from "../../assets/image/red-o-up.png";

import Indian from "../../assets/image/indian.jpeg";
import IndianAudio from "../../assets/sound/indian.mp3";
import textIndian from "../../assets/image/text-Indian.png";

import Star from "../../assets/image/star.jpeg";
import StarAudio from "../../assets/sound/star.mp3";
import textStar from "../../assets/image/text-star.png";

import Igloo from "../../assets/image/igloo.jpeg";
import IglooAudio from "../../assets/sound/igloo.mp3";
import textIgloo from "../../assets/image/text-gloo.png";
import firstIup from "../../assets/image/red-i-up.png";

import ModalVowel from "../../components/modal-vowel";
import ButtonNext from "../../components/button-next";

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
              id={Grapes}
              image={Grapes}
              audio={GrapesAudio}
              alt="Uvas"
              text={textGrapes}
              firstVowel={firstU}
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

          <ModalVowel
            id={Uniform}
            image={Uniform}
            audio={UniformAudio}
            alt="Uniforme"
            text={textUniform}
            firstVowel={firstU}
          />

        <ModalVowel
            id={Sheep}
            image={Sheep}
            audio={SheepAudio}
            alt="Oveja"
            text={textSheep}
            firstVowel={firstOup}
          />
         <ModalVowel
            id={Indian}
            image={Indian}
            audio={IndianAudio}
            alt="Indio"
            text={textIndian}
            firstVowel={firstI}
          />

        <ModalVowel
            id={Star}
            image={Star}
            audio={StarAudio}
            alt="Estrella"
            text={textStar}
            firstVowel={firstE}
          />

        <ModalVowel
            id={Igloo}
            image={Igloo}
            audio={IglooAudio}
            alt="Indio"
            text={textIgloo}
            firstVowel={firstIup}
          />
        </div>
        <div className="content-menu vowel-start">
          <ButtonBack go="/menu-game" />
          <ButtonNext go="/vowel-start-game" />
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
