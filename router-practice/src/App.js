import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRoute, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

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
