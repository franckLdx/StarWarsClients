import * as React from 'react';

import { Tabs } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MovieIcon from '@material-ui/icons/MovieFilter';
import PersonPinIcon from '@material-ui/icons/PersonPinSharp';
import HelpIcon from '@material-ui/icons/Star';
import { configure } from "mobx";
import { onError } from "mobx-react"

import { BrowserRouter } from 'react-router-dom'
import { AppLinkTab } from './AppLinkTab';
import {
  Router,
  URL_CHARACTERS,
  URL_MOVIES,
  URL_PLANETS,
  URL_SPECIES,
  URL_STARSHIPS,
  URL_VEHICLES
} from './components/Router';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    configure({
      enforceActions: 'always'
    });
  }

  public render() {
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          <>
            <AppBar position='static' color="default" >
              <Toolbar>
                <Header />
                <TabBar />
              </Toolbar>
            </AppBar>
            <Router />
          </>
        </BrowserRouter>
      </>
    );
  }
}

const Header: React.SFC<{}> = () => (
  <Typography variant="title" color="inherit">
    STAR WARS
  </Typography>
);

const TabBar: React.SFC<{}> = () => (
  <Tabs
    value={false}
    scrollable={true}
    indicatorColor="primary"
    textColor="primary"
  >
    <AppLinkTab label="Movies" icon={<MovieIcon />} to={URL_MOVIES} />
    <AppLinkTab label="Characters" icon={<FavoriteIcon />} to={URL_CHARACTERS} />
    <AppLinkTab label="Species" icon={<FavoriteIcon />} to={URL_SPECIES} />
    <AppLinkTab label="Planets" icon={<PersonPinIcon />} to={URL_PLANETS} />
    <AppLinkTab label="Starships" icon={<HelpIcon />} to={URL_STARSHIPS} />
    <AppLinkTab label="Vehicles" icon={<HelpIcon />} to={URL_VEHICLES} />
  </Tabs>
);

onError(error => {
  // tslint:disable-next-line:no-console
  console.log(error)
})

export default App;