import React, { Component } from 'react';

const formatSeconds = time => (time % 60 < 10 ? `0${time % 60}` : time % 60);

class Pomodoro extends Component {
  constructor() {
    super();

    this.state = {
      workTime: 25 * 60,
      funTime: 5 * 60,
      time: 25 * 60,
      interval: null,
      type: 'work',
    };
  }

  startCountdown = () => {
    this.setState({
      interval: setInterval(() => {
        this.setState({ time: this.state.time -= 1 });
        if (this.state.time === 0) {
          if (this.state.type === 'work') {
            this.setState({
              time: this.state.funTime,
              type: 'fun',
            });
          } else {
            this.setState({
              time: this.state.workTime,
              type: 'work',
            });
          }
        }
      }, 1000),
    });
  }

  stopCountdown = () => {
    clearInterval(this.state.interval);
    this.setState({ time: this.state.workTime });
  }

  handlePlusWorkClick = () => {
    this.setState({
      workTime: this.state.workTime += 60,
      time: (this.state.type === 'work' ? this.state.time += 60 : this.state.time),
    });
  };

  handleMinusWorkClick = () => {
    if (this.state.workTime > 60) {
      this.setState({
        workTime: this.state.workTime -= 60,
        time: (this.state.type === 'work' ? this.state.time -= 60 : this.state.time),
      });
    }
  }

  handlePlusFunClick = () => {
    this.setState({
      funTime: this.state.funTime += 60,
      time: (this.state.type === 'fun' ? this.state.time += 60 : this.state.time),
    });
  };

  handleMinusFunClick = () => {
    if (this.state.funTime > 60) {
      this.setState({
        funTime: this.state.funTime -= 60,
        time: (this.state.type === 'fun' ? this.state.time -= 60 : this.state.time),
      });
    }
  }

  render() {
    return (
      <section>
        <div className="mb--10">
          <h2>Pomodoro</h2>
        </div>
        <div className="grid">
          <div className="col-4" />
          <div className="col-4--center">
            <h3 className="p--3">{`${Math.floor(this.state.time / 60)}:${formatSeconds(this.state.time)}`}</h3>
            <p>{`${this.state.type} time!`}</p>
            <div className="mb--6">
              <button onClick={this.startCountdown} className="button mr--1">Start</button>
              <button onClick={this.stopCountdown} className="button">Stop</button>
            </div>
            <div>
              <h3 className="ds--inline-block pr--2">Work Minutes: {this.state.workTime / 60}</h3>
              <button onClick={this.handlePlusWorkClick} className="calc-button">+</button>
              <button onClick={this.handleMinusWorkClick} className="calc-button">-</button>
            </div>
            <div>
              <h3 className="ds--inline-block pr--2">Fun Minutes: {this.state.funTime / 60}</h3>
              <button onClick={this.handleFunClick} className="calc-button">+</button>
              <button onClick={this.handleMinusFunClick} className="calc-button">-</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pomodoro;
