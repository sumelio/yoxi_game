import React, { Component } from "react";
import UIfx from 'uifx'


import IntroAudio from '../../assets/sound/intro.mp3'
import './index.css'
import MenuItem from "../../components/menu-item";
import Vowel from "../../components/vowel";
import arrowNext from '../../assets/image/arrow-next.png';
import { Link } from "react-router-dom";

class IntroPage extends Component {
  render() {
    const beep = new UIfx(IntroAudio, { volume: 0.9 });

    beep.play();
    
    return (
        <div  className="content-menu top-700px">
        <Vowel label="a" />
        <Vowel label="e" />
        <Vowel label="i" />
        <Vowel label="o" />
        <Vowel label="u" />
        <Link to="/menu-game"><img src={arrowNext} className="arrowNext" /></Link>
      </div>
    );
  }
}

export default IntroPage;
