import { IconButton, Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button, { ButtonProps } from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from '@material-ui/core/Menu';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
import * as React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

interface ILinkProps { to: string }

const MyLink = (props: ButtonProps & ILinkProps) => <Link to={props.to}>{props.children}</Link>
const ItemLink = (props: MenuItemProps & ILinkProps) => <MenuItem component={MyLink} {...props} />

class App extends React.Component {
  public render() {
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          <AppBar>
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <Menu open={true}>
                  <ItemLink to='/films'>Films</ItemLink>
                  <ItemLink to='/Characters'>Characters</ItemLink>
                </Menu>
              </IconButton>
              <Typography variant="title" color="inherit">
                STAR WARS
            </Typography>
            </Toolbar>
          </AppBar>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
