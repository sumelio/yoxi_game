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

import ButtonNext from "../../components/button-next";
import starsGif from "../../assets/image/stars.gif";

class RhymeWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      showWin: false
    };
    this.setWin = this.setWin.bind(this);
    this.setFail = this.setFail.bind(this);
  }
  componentDidMount() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true,
        showWin: false
      });
      document.getElementById("rhymeWordId").play();
      setTimeout(() => {
        document.getElementById("bone").play();
      }, 2500);
    }
  }

  handleOnMouseOver = event => {
    document.getElementById("rhymeWordId").play();
    setTimeout(() => {
      document.getElementById("bone").play();
    }, 2500);
  };

  handleOnThing = event => {
    document.getElementById("bone").play();
  };
  handleOnCheese = event => {
    document.getElementById("cheese").play();
    setTimeout(() => {
      document.getElementById("win").play();
      this.setState({
        showWin: true
      });
    }, 1000);
  };
  handleOnWolf = event => {
    document.getElementById("wolf").play();
    this.setState({
      showWin: false
    });
  };
  setWin() {
    this.setState({
      showWin: true
    });
  }

  setFail() {
    this.setState({
      showWin: false
    });
  }

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
                onClick={this.handleOnThing}
                src={Bone}
                alt="Hueso"
              />
              <img
                className="stuff-img"
                onClick={this.handleOnThing}
                src={BoneText}
                alt="Hueso"
              />
            </div>
          </div>
          <div className="content-rhyme-options">
            <div>
              <img
                onClick={this.handleOnMouseOver}
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
              <img className="stuff-img"
                onClick={this.handleOnMouseOverGame}
                src={starsGif}
                alt="Yoxi"
              />
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
        <audio id="rhymeWordId" name="rhymeWordId">
          <source src={rhymeWord} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="bone" name="bone">
          <source src={BoneAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="cheese" name="cheese">
          <source src={CheeseAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="wolf" name="wolf">
          <source src={WolfAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="win" name="win">
          <source src={WinAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </React.Fragment>
    );
  }
}

export default RhymeWord;
