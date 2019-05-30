import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './routerComponents/Home';
import Attendance from './routerComponents/Attendance';
import Lists from './routerComponents/List';
import Login from './routerComponents/Login';
import Err from './routerComponents/Err';
import Navigation from './routerComponents/Navigation';

function App() {
    return(
      <HashRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/attendance' component={Attendance} />
              <Route path='/lists' component={Lists} />
              <Route path='/login' component={Login} />
              <Route component={Err} />
            </Switch>
        </div>
      </HashRouter>
    )
}

export default App;
