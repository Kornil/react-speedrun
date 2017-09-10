import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Sidebar } from './containers';
import Router from './Router';

const App = () => (
  <HashRouter>
    <main className="grid p--2">
      <Sidebar />
      <div className="col-8">
        <Router />
      </div>
      <div className="col-2" />
    </main>
  </HashRouter>
);

export default App;
