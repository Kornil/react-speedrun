import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="col-2 pl--2">
    <h3><Link to="/">Home</Link></h3>
    <h3>Front-end</h3>
    <ul>
      <li className="pb--half"><Link to="/quote_machine">Quote Machine</Link></li>
      <li className="pb--half"><Link to="/local_weather">Local Weather</Link></li>
      <li className="pb--half"><Link to="/wiki_viewer">Wiki Viewer</Link></li>
      <li className="pb--half"><Link to="/twitch_app">Twitch App</Link></li>
      <li className="pb--half"><Link to="/calculator">Calculator</Link></li>
    </ul>
  </div>
);

export default Sidebar;
