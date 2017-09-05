import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Fasting from './components/Fasting';
import Vitamins from './components/Vitamins';
import Spirulina from './components/Spirulina';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/prolonged-fasting" component={Fasting} />
              <Route path="/vitamins" component={Vitamins} />
              <Route path="/spirulina" component={Spirulina} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
