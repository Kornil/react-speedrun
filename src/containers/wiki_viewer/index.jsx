import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <section>
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
        <div className="grid">
          {(this.state.searchResult && this.state.searchInput) &&
            Object.entries(this.state.searchResult.query.pages).map(article => (
              <Card
                key={article[0]}
                url={article[1].fullurl}
                title={article[1].title}
                text={article[1].extract}
              />
            ))}
        </div>
      </section>
    );
  }
}

const Card = props => (
  <div className="col-6">
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className="m--1 ph--2 br--white rounded">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </a>
  </div>
);

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default WikiViewer;
