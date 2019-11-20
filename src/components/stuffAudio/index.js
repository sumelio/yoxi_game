import React, { Component } from "react";
import "./index.css";
import Win from "../../assets/sound/coin.mp3";

class StuffAudio extends Component {
  state = {
    isPlaying: false,
    vowel: 'vowel'
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.text && 
      document.getElementById("first-vowel").classList.add("red-vowel-turn")
    }, 100)
  }

  handleOnMouseOver = () => {
    document.getElementById('win').play();
    document.getElementById(this.props.id).play();
  };

  render() {
    return (
      <div>
        <div>
          <img
            onClick={this.handleOnMouseOver}
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
      </div>
    );
  }
}

export default StuffAudio;
