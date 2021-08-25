import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TrendingPage from '../component/TrendingPage';
import Home from '../component/Home'

export default (
  <Switch> 
    <Route exact path="/" component={ Home } />
    <Route path="/trending" component={ TrendingPage }/>
  </Switch>
)

// Home 
  // Nav, Search, Button