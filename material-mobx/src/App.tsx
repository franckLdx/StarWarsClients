import * as React from 'react';

import DevTools from 'mobx-react-devtools';

import {
  createStyles,
  StyledComponentProps,
  Tabs,
  Theme,
  withStyles,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublicIcon from '@material-ui/icons/Public';
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
import * as _ from './css/Theme';

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
        <DevTools />
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


const TabBarStyle = (theme: Theme) => createStyles({
  linkTab: {
    alignSelf: 'flex-end',
    marginTop: theme.spacing.unit,
  },
});
type TabBarStyle = StyledComponentProps<"linkTab">;

const TabBarRaw: React.SFC<TabBarStyle> = ({ classes }) => (
  <Tabs
    value={false}
    scrollable={true}
    indicatorColor="primary"
    textColor="primary"
  >
    <LinkTab className={classes!.linkTab} label="Movies" icon={<img src="./tn_Ct3.jpg" />} href={URL_MOVIES} />
    <LinkTab className={classes!.linkTab} label="Characters" icon={<img src="./icones/favicon_Boba.ico" />} href={URL_CHARACTERS} />
    <LinkTab className={classes!.linkTab} label="Species" icon={<FavoriteIcon />} href={URL_SPECIES} />
    <LinkTab className={classes!.linkTab} label="Planets" icon={<PublicIcon />} href={URL_PLANETS} />
    <LinkTab className={classes!.linkTab} label="Starships" icon={<HelpIcon />} href={URL_STARSHIPS} />
    <LinkTab className={classes!.linkTab} label="Vehicles" icon={<HelpIcon />} href={URL_VEHICLES} />
  </Tabs>
);

onError(error => {
  // tslint:disable-next-line:no-console
  console.log(error)
})

const TabBar = withStyles(TabBarStyle)(TabBarRaw);

export default withStyles(AppStyle)(App);