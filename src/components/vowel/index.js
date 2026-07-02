import React, { Component } from "react";
import PropTypes from "prop-types";
import UIfx from "uifx";
import EnterAudio from "../../assets/sound/enter.mp3";
import Win from "../../assets/sound/win.mp3";
import Fail from "../../assets/sound/fail.mp3";

import { playSound } from "../../utils/audioManager";

import "./index.css";

class Vowel extends Component {
  constructor(props) {
    super(props);
    this.timeoutId = null;
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillUnmount() {
    // Evita setState/reproducción sobre un componente desmontado
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOnClick() {
    this.enterAudio = new UIfx(EnterAudio, { volume: 1.0 });
    this.enterAudio.play(1.0);
    playSound(this.props.vowelSound);

    if (this.props.win && this.props.setWin) {
      this.timeoutId = setTimeout(() => {
        playSound(Win);
        this.props.setWin();
      }, 2000);
    } else if (this.props.setFail) {
      this.timeoutId = setTimeout(() => {
        playSound(Fail);
        this.props.setFail();
      }, 2000);
    }
  }

  handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.handleOnClick();
    }
  }

  render() {
    return (
      <div
        id={`${this.props.id}-content`}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Vocal ${this.props.id}`}
        className={`content-menu-item ${this.props.className}`}
      >
        <img
          src={this.props.vowel}
          className={`yoxi-vowel-${this.props.size}`}
          alt={`Vocal ${this.props.id}`}
        />
      </div>
    );
  }
}

Vowel.propTypes = {
  id: PropTypes.string.isRequired,
  vowel: PropTypes.string.isRequired,
  vowelSound: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  win: PropTypes.bool,
  setWin: PropTypes.func,
  setFail: PropTypes.func
};

Vowel.defaultProps = {
  size: "100px",
  className: "",
  win: false
};

export default Vowel;
