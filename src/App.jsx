import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import { Home, QuoteMachine, WikiViewer, LocalWeather, TwitchApp } from './containers';

const App = () => (
  <HashRouter>
    <main className="grid p--2">
      <div className="col-2 pl--2">
        <h3><Link to="/">Home</Link></h3>
        <h3>Front-end</h3>
        <ul>
          <li className="pb--half"><Link to="/quote_machine">Quote Machine</Link></li>
          <li className="pb--half"><Link to="/local_weather">Local Weather</Link></li>
          <li className="pb--half"><Link to="/wiki_viewer">Wiki Viewer</Link></li>
          <li className="pb--half"><Link to="/twitch_app">Twitch App</Link></li>
        </ul>
      </div>
      <div className="col-8">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quote_machine" component={QuoteMachine} />
          <Route path="/local_weather" component={LocalWeather} />
          <Route path="/wiki_viewer" component={WikiViewer} />
          <Route path="/twitch_app" component={TwitchApp} />
        </Switch>
      </div>
      <div className="col-2" />
    </main>
  </HashRouter>
);

export default App;
