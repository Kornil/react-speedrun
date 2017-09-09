import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import { Home, QuoteMachine, WikiViewer } from './containers';

const App = () => (
  <HashRouter>
    <main className="grid p--2">
      <div className="col-2 pl--2">
        <Link to="/">Home</Link><br />
        <Link to="/quote_machine">Quote Machine</Link><br />
        <Link to="/wiki_viewer">Wiki Viewer</Link><br />
      </div>
      <div className="col-8">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quote_machine" component={QuoteMachine} />
          <Route path="/wiki_viewer" component={WikiViewer} />
        </Switch>
      </div>
    </main>
  </HashRouter>
);

export default App;
