import React, { Component } from 'react';

class WikiViewer extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      searchResult: null,
    };
    this.onChange = this.onChange.bind(this);
  }

  async onChange(e) {
    this.setState({ searchInput: e.target.value });
    const response = await fetch(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=10&gsrsearch=${this.state.searchInput}`);
    const searchResult = await response.json();
    this.setState({ searchResult });
  }

  render() {
    return (
      <div>
        <div className="mb--10">
          <h2>Wiki Viewer</h2>
        </div>
        <input
          className="input mb--2 mr--1"
          onChange={this.onChange}
          value={this.state.search}
          placeholder="Search..."
        />
        <button className="button">
          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">Random!</a>
        </button>
        {this.state.searchResult && this.state.searchInput &&
          Object.entries(this.state.searchResult.query.pages).map(article => (
            <a href={article[1].fullurl} target="_blank" rel="noopener noreferrer">
              <div key={article[0]} className="m--1 ph--2 br--white rounded">
                <h2>{article[1].title}</h2>
                <p>{article[1].extract}</p>
              </div>
            </a>
          ))}
      </div>
    );
  }
}

export default WikiViewer;
