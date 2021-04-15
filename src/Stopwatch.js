import React, { Component } from "react";
import './App.css';

import { scrambleData } from './scrambleData.js';

class Stopwatch extends React.Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    scramble: null,
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 2);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  componentDidMount() {
    var random = Object.keys(scrambleData)[Object.keys(scrambleData).length * Math.random() << 0];
    console.log(random);
    this.setState({
      scramble: scrambleData[random].alg
    });

    const handleSpace = (event) => {
       if (event.keyCode === 32) {
         if (this.state.timerOn) {
           this.stopTimer();
         }
         else {
           this.resetTimer();
           this.startTimer();
         }
      }
    };
    window.addEventListener('keydown', handleSpace);
  }

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch" style={{textAlign: 'center'}}>
        <div className="Scramble-display" >
          {this.state.scramble}
        </div>
        <div className="Stopwatch-display" >
          {seconds}.{centiseconds}
        </div>
      </div>
    );
  }
}

export default Stopwatch;
