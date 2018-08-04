import React from 'react';
import { Route, Switch } from "react-router-dom";

import Films from '../films';
import People from '../people';
import Planets from '../planets';
import Starships from '../starships';
import Species from '../species';
import Vehicles from '../vehicles';

export default (props) => (
  <Switch>
    <Route exact path='/' component={Films} />
    <Route path='/films' component={Films} />
    <Route path='/people' component={People} />
    <Route path='/planets' component={Planets} />
    <Route path='/starships' component={Starships} />
    <Route path='/species' component={Species} />
    <Route path='/vehicles' component={Vehicles} />
  </Switch>
)