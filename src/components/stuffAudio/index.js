import React, { Component } from "react";
import "./index.css";
import Win from "../../assets/sound/applause.mp3";
import Fail from "../../assets/sound/fail.mp3";
import FailImg from "../../assets//image/fail.jpeg";

class StuffAudio extends Component {
  state = {
    isPlaying: false,
    vowel: 'vowel',
    showImg: null
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.text && 
      document.getElementById("first-vowel").classList.add("red-vowel-turn")
    }, 100)
  }

  handleOnMouseOver = () => {
    if (this.props.correct && this.props.vowel) {
      if (this.props.correct === this.props.vowel) {
        setTimeout( () => {document.getElementById('win').play();} , 2000)
      } else {
        setTimeout( () => {
        this.setState({
          showImg: FailImg
        })
        document.getElementById('fail').play();
        document.getElementById( `stuffImg${this.props.id}`).src =  FailImg;
      
      } , 1000)
      }
    }
      document.getElementById(this.props.id).play();
    
    
  };

  render() {
    return (
      <div>
        <div>
          <img
            onClick={this.handleOnMouseOver}
            id={`stuffImg${this.props.id}`}
            className={`stuff-image-${this.props.size}`}
            src={this.props.image}
            alt={this.props.alt}
          />
        </div>
        
        {this.props.text && (
          <div className="word">
            <img className='red-vowel'
              id="first-vowel"
            onClick={this.handleOnMouseOver}
            src={this.props.firstVowel}
              alt={this.props.alt}
              
          />
            <img className='text-vowel'
              onClick={this.handleOnMouseOver}
              src={this.props.text}
              alt={this.props.alt}
            />
            </div>          )}
        <audio id={this.props.id} name={this.props.id}>
          <source src={this.props.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id='win' name='win'>
          <source src={Win} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id='fail' name='fail'>
          <source src={Fail} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default StuffAudio;
