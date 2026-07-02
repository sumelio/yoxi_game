import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import Win from "../../assets/sound/win.mp3";
import Fail from "../../assets/sound/fail.mp3";
import FailImg from "../../assets//image/fail.png";
import starsGif from "../../assets/image/stars.gif";

import { playSound } from "../../utils/audioManager";

class StuffAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWin: false,
      showFail: false,
      turnVowel: false
    };
    this.timeouts = [];
  }

  componentDidMount() {
    if (this.props.text) {
      this.addTimeout(() => this.setAnimationAndCheckWin(), 100);
    }
  }

  componentWillUnmount() {
    // Limpia todos los timeouts para evitar setState tras desmontar
    this.timeouts.forEach(clearTimeout);
    this.timeouts = [];
  }

  addTimeout(fn, delay) {
    this.timeouts.push(setTimeout(fn, delay));
  }

  setAnimationAndCheckWin() {
    this.setState({ turnVowel: true });
    playSound(this.props.audio);

    this.addTimeout(() => {
      if (this.props.correct && this.props.vowel) {
        if (this.props.correct === this.props.vowel) {
          this.addTimeout(() => {
            playSound(Win);
            this.setState({ showWin: true });
          }, 2000);
        } else {
          this.addTimeout(() => {
            playSound(Fail);
            this.setState({ showFail: true });
          }, 2000);
        }
      }
    }, 1000);
  }

  handleOnClick = () => {
    if (this.props.correct && this.props.vowel) {
      if (this.props.correct !== this.props.vowel) {
        this.addTimeout(() => {
          this.setState({ showFail: true });
        }, 2000);
      }
    }
  };

  render() {
    const imageSrc = this.state.showFail ? FailImg : this.props.image;

    return (
      <div>
        <div>
          {this.state.showWin && (
            <img src={starsGif} className="yoxi-vowel-start" alt="Estrellas" />
          )}
          <img
            onClick={this.handleOnClick}
            id={`stuffImg${this.props.id}`}
            className={`stuff-image-${this.props.size}`}
            src={imageSrc}
            alt={this.props.alt}
          />
          {this.state.showWin && (
            <img src={starsGif} className="yoxi-vowel-start" alt="Estrellas" />
          )}
        </div>

        {this.props.text && (
          <div className="word">
            <img
              className={`red-vowel${this.state.turnVowel ? " red-vowel-turn" : ""}`}
              onClick={this.handleOnClick}
              src={this.props.firstVowel}
              alt={this.props.alt}
            />
            <img
              className="text-vowel"
              onClick={this.handleOnClick}
              src={this.props.text}
              alt={this.props.alt}
            />
          </div>
        )}
      </div>
    );
  }
}

StuffAudio.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
  correct: PropTypes.string,
  vowel: PropTypes.string,
  text: PropTypes.string,
  firstVowel: PropTypes.string
};

StuffAudio.defaultProps = {
  size: "8px"
};

export default StuffAudio;
