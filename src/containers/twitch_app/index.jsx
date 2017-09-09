import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TwitchApp extends Component {
  constructor() {
    super();

    this.state = {
      twitchAPI: 'https://wind-bow.glitch.me/twitch-api/streams/',
      streamersList: ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'BeyondTheSummit'],
      streamersData: null,
    };

    this.fetchStreams();
  }

  fetchStreams = async () => {
    await this.state.streamersList.map(async streamer => this.singleFetchAction(streamer));
  }

  singleFetchAction = async (streamer) => {
    const response = await fetch(this.state.twitchAPI + streamer);
    const streamData = await response.json();
    this.setState({ streamersData: { ...this.state.streamersData, [streamer]: streamData } });
  }

  render() {
    return (
      <section>
        <div className="mb--10">
          <h2>Twitch App</h2>
        </div>
        <div className="grid">
          {this.state.streamersData &&
            Object.entries(this.state.streamersData)
              // online always first
              .sort((a, b) => (a[1].stream === null) - (b[1].stream === null))
              .map(stream => (
                <TwitchCard
                  key={stream[0]}
                  name={stream[0]}
                  stream={stream[1].stream}
                />
              ))}
        </div>
      </section>
    );
  }
}

const TwitchCard = props => (
  <div className="col-4">
    <a href={`https://www.twitch.tv/${props.name}`} target="_blank" rel="noopener noreferrer">
      <div className="m--1 ph--2 br--white rounded">
        <h2>{props.name}</h2>
        <p>{props.stream ? `${props.stream.stream_type} -- ${props.stream.game}` : 'offline'}</p>
      </div>
    </a>
  </div>
);

TwitchCard.propTypes = {
  name: PropTypes.string.isRequired,
  stream: PropTypes.objectOf(PropTypes.shape),
};

TwitchCard.defaultProps = {
  stream: null,
};

export default TwitchApp;
