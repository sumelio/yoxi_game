import React, { Component } from "react";
import UIfx from "uifx";
import IntroAudio from "../../assets/sound/intro.mp3";
import "./index.css";
import Vowel from "../../components/vowel";
import arrowNext from "../../assets/image/arrow-next.png";
import a from "../../assets/image/a.png";
import e from "../../assets/image/e.png";
import i from "../../assets/image/i.png";
import o from "../../assets/image/o.png";
import u from "../../assets/image/u.png";
import yoxi from "../../assets/image/yoxi.png";
import { Link } from "react-router-dom";

class IntroPage extends Component {
  beep = {};
  isPlaying = false;

  constructor() {
    super();
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
  }
  componentDidMount() {
     
  }

  handleOnMouseOver() {
    if (!this.isPlaying) {
      this.isPlaying = true;

     this.beep = new UIfx(IntroAudio, { volume: 1.0 });
      this.beep.play(1.0);
    }
  }
  render() {
    return (
      <div onMouseOver={this.handleOnMouseOver}>
        <img src={yoxi} className="yoxi" alt="Yoxi" />
        <div className="content-menu">
          <img src={a} className="yoxi" alt="a" />
          <img src={e} className="yoxi" alt="e" />
          <img src={i} className="yoxi" alt="i" />
          <img src={o} className="yoxi" alt="o" />
          <img src={u} className="yoxi" alt="u" />
          <Link to="/menu-game">
            <img src={arrowNext} className="arrowNext" alt="Menu" />
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroPage;
