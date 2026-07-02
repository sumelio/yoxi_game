import React, { Component } from "react";

import rhymeWord from "../../assets/sound/rhyme_word.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
import yoxi from "../../assets/image/yoxi.png";
import Bone from "../../assets/image/bone.png";
import Cheese from "../../assets/image/cheese.png";
import wolf from "../../assets/image/wolf.png";

import BoneText from "../../assets/image/bone-text.png";
import CheeseText from "../../assets/image/cheese-text.png";
import WolfText from "../../assets/image/wolf-text.png";

import BoneAudio from "../../assets/sound/bone.mp3";
import CheeseAudio from "../../assets/sound/cheese.mp3";
import WolfAudio from "../../assets/sound/wolf.mp3";
import WinAudio from "../../assets/sound/win.mp3";

import starsGif from "../../assets/image/stars.gif";

import { playSound } from "../../utils/audioManager";

class RhymeWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWin: false
    };
    this.timeouts = [];
  }

  componentDidMount() {
    playSound(rhymeWord);
    this.addTimeout(() => {
      playSound(BoneAudio);
    }, 2500);
  }

  componentWillUnmount() {
    this.timeouts.forEach(clearTimeout);
    this.timeouts = [];
  }

  addTimeout(fn, delay) {
    this.timeouts.push(setTimeout(fn, delay));
  }

  handleOnClickYoxi = () => {
    playSound(rhymeWord);
    this.addTimeout(() => {
      playSound(BoneAudio);
    }, 2500);
  };

  handleOnBone = () => {
    playSound(BoneAudio);
  };

  handleOnCheese = () => {
    playSound(CheeseAudio);
    this.addTimeout(() => {
      playSound(WinAudio);
      this.setState({ showWin: true });
    }, 1000);
  };

  handleOnWolf = () => {
    playSound(WolfAudio);
    this.setState({ showWin: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="content-menu vowel-start-time">
          <h1>Rima Rimando</h1>
        </div>
        <div className="content-rhyme">
          <div className="content-start-vowel-stauff">
            <div className="content-rhyme-item">
              <img
                className="stuff-img"
                onClick={this.handleOnBone}
                src={Bone}
                alt="Hueso"
              />
              <img
                className="stuff-img"
                onClick={this.handleOnBone}
                src={BoneText}
                alt="Hueso"
              />
            </div>
          </div>
          <div className="content-rhyme-options">
            <div>
              <img
                onClick={this.handleOnClickYoxi}
                src={yoxi}
                className="yoxi-vowel-rhyme"
                alt="Yoxi"
              />
            </div>
          </div>
          <div className="content-rhyme-options">
            <div className="content-win">
              <div className="content-rhyme-item">
                <img
                  className="stuff-img"
                  onClick={this.handleOnCheese}
                  src={Cheese}
                  alt="Queso"
                />
                <img
                  className="stuff-img"
                  onClick={this.handleOnCheese}
                  src={CheeseText}
                  alt="Queso"
                />
              </div>
              {this.state.showWin && (
                <img className="stuff-img" src={starsGif} alt="Estrellas" />
              )}
            </div>
            <div className="content-rhyme-item">
              <img
                className="stuff-img"
                onClick={this.handleOnWolf}
                src={wolf}
                alt="Lobo"
              />
              <img
                className="stuff-img"
                onClick={this.handleOnWolf}
                src={WolfText}
                alt="Lobo"
              />
            </div>
          </div>
        </div>
        <div className="content-menu vowel-start">
          <ButtonBack go="/menu-game" />
        </div>
      </React.Fragment>
    );
  }
}

export default RhymeWord;
