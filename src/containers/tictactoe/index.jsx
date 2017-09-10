import React, { Component } from 'react';

const checkGameOver = (arr, text = 1) => {
  if ( // horizontal
    (arr[0] && (arr[0] === arr[1] && arr[0] === arr[2])) ||
    (arr[3] && (arr[3] === arr[4] && arr[3] === arr[5])) ||
    (arr[6] && (arr[6] === arr[7] && arr[6] === arr[8])) ||
    // vertical
    (arr[0] && (arr[0] === arr[3] && arr[0] === arr[6])) ||
    (arr[1] && (arr[1] === arr[4] && arr[1] === arr[7])) ||
    (arr[2] && (arr[2] === arr[5] && arr[2] === arr[8])) ||
    // diagonals
    (arr[0] && (arr[0] === arr[4] && arr[0] === arr[8])) ||
    (arr[2] && (arr[2] === arr[4] && arr[2] === arr[6]))) {
    return text;
  } else if ( // check if every cell is full
      arr[0] && arr[1] && arr[2] &&
      arr[3] && arr[4] && arr[5] &&
      arr[6] && arr[7] && arr[8]) {
    return 'Tie!';
  }
  return false;
};

class TicTacToe extends Component {
  constructor() {
    super();

    this.state = {
      turn: 1,
      value: ['', '', '', '', '', '', '', '', ''],
      text: 'New Game',
    };
  }

  handleClick = (num) => {
    if (this.state.turn === 1) {
      const cloneValues = this.state.value;
      if (!this.state.value[num]) {
        cloneValues[num] = 'x';
        this.setState({
          value: cloneValues,
          turn: 0,
        });
      }
      if (checkGameOver(this.state.value)) {
        this.setState({ turn: 2 });
      }
      if (checkGameOver(this.state.value)) this.setState({ text: checkGameOver(this.state.value, 'You Win!') });
      else this.monkeyTurn();
    }
  }

  monkeyTurn = () => {
    const cloneValues = this.state.value;
    for (let i = 0; i < 9; i += 1) {
      if (!cloneValues[i]) {
        cloneValues[i] = 'o';
        this.setState({
          value: cloneValues,
          turn: 1,
        });
        if (checkGameOver(this.state.value)) {
          this.setState({
            text: checkGameOver(this.state.value, 'You Lose!'),
            turn: 2,
          });
        }
        return;
      }
    }
  }

  reset = () => this.setState({
    value: ['', '', '', '', '', '', '', '', ''],
    text: 'New Game',
    turn: 1,
  });

  render() {
    return (
      <div>
        <div className="mb--10">
          <h2>Tic Tac Toe</h2>
        </div>
        <div className="grid-tictactoc">
          {[...Array(9)].map((x, i) => (
            <div
              role="button"
              onClick={() => this.handleClick(i)}
              key={Math.random()}
              className="col-4--center cell-tictactoe"
              tabIndex={0}
            >
              {this.state.value[i]}
            </div>
          ))}
        </div>
        <button onClick={this.reset} className="button relative top--10 left--4">{this.state.text}</button>
      </div>
    );
  }
}

export default TicTacToe;
