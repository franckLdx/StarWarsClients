import React from 'react';
import { Route, Switch } from "react-router-dom";
import Item from "./item";
import List from './list';

export default () => (
  <Switch>
    <Route path='/species/:id' component={Item}/>
    <Route component={List}/>
  </Switch>
)