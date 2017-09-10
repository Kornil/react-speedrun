import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import { Sidebar } from './containers';

const App = () => (
  <HashRouter>
    <main className="grid p--2">
      <Sidebar />
      <div className="col-8">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quote_machine" component={QuoteMachine} />
          <Route path="/local_weather" component={LocalWeather} />
          <Route path="/wiki_viewer" component={WikiViewer} />
          <Route path="/twitch_app" component={TwitchApp} />
          <Route path="/calculator" component={Calculator} />
        </Switch>
      </div>
      <div className="col-2" />
    </main>
  </HashRouter>
);

export default App;
