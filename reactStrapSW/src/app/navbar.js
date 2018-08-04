import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  componentWillMount() {
    if (this.props.history.location.pathname === '/')
      this.props.history.replace('/films');
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect >
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer eventKey={1} to='/films' exact><NavItem>Films</NavItem></IndexLinkContainer>
            <IndexLinkContainer eventKey={2} to='/people'><NavItem>People</NavItem></IndexLinkContainer>
            <IndexLinkContainer eventKey={3} to='/planets'><NavItem>Planets</NavItem></IndexLinkContainer>
            <IndexLinkContainer eventKey={4} to='/starships'><NavItem>Starships</NavItem></IndexLinkContainer>
            <IndexLinkContainer eventKey={5} to='/species'><NavItem>Species</NavItem></IndexLinkContainer>
            <IndexLinkContainer eventKey={6} to='/vehicles'><NavItem>Vehicles</NavItem></IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(NavBar);
