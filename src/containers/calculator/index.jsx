import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      result: '',
      buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '=', '.', '*', '/', '-', 'C'],
    };
  }

  handleClick = (e) => {
    const value = e.target.value;
    const { result } = this.state;
    if (value === 'C') this.setState({ result: '' });
    else if (result === Infinity) this.setState({ result: value });
    else if (value === '=') this.setState({ result: eval(result) }); // eslint-disable-line no-eval
    else if (!result.length && value === '0') this.setState({ result: '0.' });
    else if ((!result.length && isNaN(value)) ||
      (isNaN(result[result.length - 1]) && isNaN(value)));
    else this.setState({ result: this.state.result += value });
  };

  render() {
    return (
      <section>
        <div className="mb--10">
          <h2>Calculator</h2>
        </div>
        <div className="grid">
          <div className="col-4" />
          <div className="col-4--center">
            <input type="text" className="input ds--block mb--1" value={this.state.result} readOnly />
            <div className="pl--6">
              {this.state.buttons.map((button, i) => (
                <span key={button}>
                  <button
                    onClick={this.handleClick}
                    value={button}
                    className="calc-button"
                  >
                    {button}
                  </button>
                  {(i + 1) % 4 === 0 && <br />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
