import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import { Home, QuoteMachine } from './containers';

/**
 * this container is defined as class so you can modify state
 * when you add more stuff to it
 */
class App extends React.Component {
  /**
   * this is our statefull render
   * @return {objects} our stateless components
   */
  render() {
    return (
      <HashRouter>
        <main className="grid p--2">
          <div className="col-2 pl--2">
            <Link to="/">Home</Link><br />
            <Link to="/quote_machine">Quote Machine</Link><br />
          </div>
          <div className="col-8">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/quote_machine" component={QuoteMachine} />
            </Switch>
          </div>
        </main>
      </HashRouter>
    );
  }
}

export default App;
