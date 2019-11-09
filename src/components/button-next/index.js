import React, { Component } from "react";
import { Redirect } from "react-router";

import NextAudio from "../../assets/sound/next.mp3";

import arrowNext from "../../assets/image/arrow-next.png";
import "./index.css";

class ButtonNext extends Component {
  state = {
    toDashboard: false
  };

  handleOnClickNext = () => {
    const nextAudioId = document.getElementById("NextAudioId");
    nextAudioId.play();
    setTimeout(() => {
      nextAudioId.pause();
      this.setState(() => ({
        toDashboard: true
      }));
    }, 0);
  };

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect push to={this.props.go} />;
    }

    return (
      <div className="content-menu-item">
        <img
          onClick={this.handleOnClickNext}
          src={arrowNext}
          className="arrowNext"
          alt="Menu"
        />
        <audio id="NextAudioId" name="NextAudioId">
          <source src={NextAudio} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default ButtonNext;
