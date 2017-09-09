import React, { Component } from 'react';

class QuoteMachine extends Component {

  constructor() {
    super();

    this.state = {
      API: 'https://talaikis.com/api/quotes/random/',
      tweet: 'https://twitter.com/intent/tweet?via=Fragno92&hashtags=FreeCodeCamp&text=',
      quote: {},
    };
    this.fetchQuote = this.fetchQuote.bind(this);
    this.fetchQuote();
  }

  async fetchQuote() {
    const response = await fetch(this.state.API);
    const quote = await response.json();
    this.setState({ quote });
  }

  render() {
    return (
      <div>
        <div className="mb--10">
          <h2>Quote Machine</h2>
        </div>
        <p className="mb--2" >
          <i>{this.state.quote.quote}</i>
        </p>
        <p>{this.state.quote.author}</p>
        <button className="button mr--1" onClick={this.fetchQuote}>New quote</button>
        <button className="button">
          <a
            href={this.state.tweet + this.state.quote.quote}
            target="_blank"
            rel="noopener noreferrer"
          >Tweet it!</a>
        </button>
      </div>
    );
  }
}

export default QuoteMachine;
