import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { Home, QuoteMachine, WikiViewer,
  LocalWeather, TwitchApp, Calculator, Pomodoro,
  TicTacToe } from './containers';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/quote_machine" component={QuoteMachine} />
    <Route path="/local_weather" component={LocalWeather} />
    <Route path="/wiki_viewer" component={WikiViewer} />
    <Route path="/twitch_app" component={TwitchApp} />
    <Route path="/calculator" component={Calculator} />
    <Route path="/pomodoro" component={Pomodoro} />
    <Route path="/tictactoe" component={TicTacToe} />
  </Switch>
);

export default Router;
