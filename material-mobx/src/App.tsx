import * as React from 'react';

import { createStyles, StyledComponentProps, Tabs, Theme, withStyles } from '@material-ui/core';
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

import LinkTab from './components/routes/LinkTab';
import {
  Router,
  URL_CHARACTERS,
  URL_MOVIES,
  URL_PLANETS,
  URL_SPECIES,
  URL_STARSHIPS,
  URL_VEHICLES
} from './components/routes/Router';

const AppStyle = (theme: Theme) => createStyles({
  appBar: {
    marginBottom: theme.spacing.unit * 3,
  },
});
type AppStyleProps = StyledComponentProps<"appBar">;


class App extends React.Component<AppStyleProps> {
  constructor(props: any) {
    super(props);
    configure({
      enforceActions: 'always'
    });
  }

  public render() {
    const appBar = this.props.classes!.appBar;
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          <>
            <AppBar className={appBar} position='static' color="default" >
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
  <Typography variant="h5" color="inherit">
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
    <LinkTab label="Movies" icon={<MovieIcon />} to={URL_MOVIES} />
    <LinkTab label="Characters" icon={<FavoriteIcon />} to={URL_CHARACTERS} />
    <LinkTab label="Species" icon={<FavoriteIcon />} to={URL_SPECIES} />
    <LinkTab label="Planets" icon={<PersonPinIcon />} to={URL_PLANETS} />
    <LinkTab label="Starships" icon={<HelpIcon />} to={URL_STARSHIPS} />
    <LinkTab label="Vehicles" icon={<HelpIcon />} to={URL_VEHICLES} />
  </Tabs>
);

onError(error => {
  // tslint:disable-next-line:no-console
  console.log(error)
})

export default withStyles(AppStyle)(App);