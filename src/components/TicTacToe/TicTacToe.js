import React from 'react';

import Board from './Board';

import { calculateWinner } from './utils';

import './tictactoe.css';

class TicTacToe extends React.Component {

  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]){
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 
        'Move #' + move : 
        'Game start';

        return (
          <li key={move} onClick={() => this.jumpTo(move)}>{desc}</li>
        );
    })
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="tictactoe">
        <div className="t3-board">
          <Board 
            squares={current.squares} 
            onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="t3-info">
          <div>{status}</div>
          <ol className="moves">{moves}</ol>
        </div>
      </div>
    );
  }
}

export default TicTacToe;