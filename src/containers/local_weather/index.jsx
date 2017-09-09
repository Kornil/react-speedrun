import React, { Component } from 'react';

class LocalWeather extends Component {
  constructor() {
    super();

    this.state = {
      locationAPI: 'https://freegeoip.net/json/',
      location: null,
      weather: null,
      temp: 'C',
      tempValue: '',
    };
    this.fetchLocation();
  }

  async fetchLocation() {
    const response = await fetch(this.state.locationAPI);
    const location = await response.json();
    this.setState({ location });
    await this.fetchWeather();
  }

  async fetchWeather() {
    const weatherAPI = `https://fcc-weather-api.glitch.me/api/current?lat=${this.state.location.latitude}&lon=${this.state.location.longitude}`;
    const response = await fetch(weatherAPI);
    const weather = await response.json();
    this.setState({
      weather,
      tempValue: `${weather.main.temp} C`,
    });
  }

  handleTemp = () => {
    if (this.state.temp === 'C') {
      this.setState({
        temp: 'F',
        tempValue: `${Math.round(((this.state.weather.main.temp * 9) / 5) + 32)} F`,
      });
    } else {
      this.setState({
        temp: 'C',
        tempValue: `${this.state.weather.main.temp} C`,
      });
    }
  }

  render() {
    return (
      <section>
        <div className="mb--10">
          <h2>Local Weather</h2>
        </div>
        {this.state.weather &&
        <section>
          <h3>{this.state.weather.name}</h3>
          <p className="ds--inline-block">{this.state.weather.weather[0].description}</p>
          <button onClick={this.handleTemp} className="button ml--1 ph--2">
            <h4>{this.state.tempValue}</h4>
          </button>
        </section>}
      </section>
    );
  }
}

export default LocalWeather;
