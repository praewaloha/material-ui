import React, { Component } from 'react'
import Staff_log from './Staff_log'
import Staff_HR from './Staff_HR'
import Report from './Report'
import Manage from './Manage'
import History from './History'
import Event from './Event'
import App from './App'
import { BrowserRouter, Switch, Route} from 'react-router-dom'


class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
        <div>
          <Switch>
            <Route exact path="/report" component={Report} />
            <Route path="/manage" component={Manage} />
            <Route path="/his" component={History} />
            <Route path="/event" component={Event} />
          </Switch>
      </div>
    </BrowserRouter>
  );
  }
}

export default Main
