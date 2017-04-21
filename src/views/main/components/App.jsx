import * as React from 'react';

import logo from '../../../static/imgs/logo.svg';
import '../../../static/css/App.css';

export const App = props => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Hello this is shawnkoon!</h2>
    </div>
    <p className="App-intro">
      Please Enjoy this starter template & make sure to checkout my <a href="https://github.com/shawnkoon">Github</a>.
    </p>
    <p className="App-intro">
      Thanks :)
    </p>
  </div>
);