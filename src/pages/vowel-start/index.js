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

import Uniform from "../../assets/image/uniform.png";
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

import Igloo from "../../assets/image/igloo.png";
import IglooAudio from "../../assets/sound/igloo.mp3";
import textIgloo from "../../assets/image/text-gloo.png";
import firstIup from "../../assets/image/red-i-up.png";


import Ambulance from "../../assets/image/ambulance.png";
import AmbulanceAudio from "../../assets/sound/ambulance.mp3";
import textAmbulance from "../../assets/image/text-ambulance.png";

import Hedgehog from "../../assets/image/hedgehog.jpeg";
import HedgehogAudio from "../../assets/sound/hedgehog.mp3";
import textHedgehog from "../../assets/image/text-hedgehog.png";

import Bee from "../../assets/image/bee.png";
import BeeAudio from "../../assets/sound/bee.mp3";
import textBee from "../../assets/image/text-bee.png";
import firstAup from "../../assets/image/red-a-up.png";

import Iguana from "../../assets/image/iguana.png";
import IguanaAudio from "../../assets/sound/iguana.mp3";
import textIguana from "../../assets/image/text-iguana.png";

import ModalVowel from "../../components/modal-vowel";
import ButtonNext from "../../components/button-next";

class VowelStart extends Component {
  state = {
    isPlaying: false,
    show: false
  };

  componentDidMount() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
      document.getElementById("VowelStartAudioId").play();
      setTimeout(() => { 

        this.setState({
          show: true
        })
      }, 4000)
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
        {this.state.show &&
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
            <ModalVowel
              id={Ambulance}
              image={Ambulance}
              audio={AmbulanceAudio}
              alt="Indio"
              text={textAmbulance}
              firstVowel={firstA}
            />
            <ModalVowel
              id={Hedgehog}
              image={Hedgehog}
              audio={HedgehogAudio}
              alt="Indio"
              text={textHedgehog}
              firstVowel={firstE}
            />
            <ModalVowel
              id={Bee}
              image={Bee}
              audio={BeeAudio}
              alt="Abeja"
              text={textBee}
              firstVowel={firstAup}
            />
            <ModalVowel
              id={Iguana}
              image={Iguana}
              audio={IguanaAudio}
              alt="Abeja"
              text={textIguana}
              firstVowel={firstIup}
            />
          </div>
        }
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
