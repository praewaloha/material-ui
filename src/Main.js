import React, { Component } from 'react'
import Staff_log from './Staff_log'
import Staff_HR from './Staff_HR'
import App from './App'
import { BrowserRouter, Router, Switch, Route} from 'react-router-dom'




class Main extends Component {

  
  render() {
    return (
      <BrowserRouter>
        <App />
        <div className=''>
          <Switch>
            <Route exact path="/log" component={Staff_log} />
            <Route path="/hr" component={Staff_HR} />
          </Switch>
       
      </div>
    </BrowserRouter>
  );
  }
}

export default Main
