import * as React from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { URL_FILMS, URL_PEOPLE, URL_PLANETS, URL_SPACESHIPS, URL_SPECIES, URL_VEHICLES } from './routes';

interface INavigationState { isOpen: boolean };

export default class Navigation extends React.Component<{}, INavigationState> {
  public state = { isOpen: false };

  public render() {
    return (
      <Navbar color="light" light={true} expand="md">
        <Header onToggle={this.onToggle} />
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            <Content />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

  private onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

const Content: React.StatelessComponent<{}> = () => (
  <>
    <Item label={"Films"} href={URL_FILMS} />
    <Item label={"People"} href={URL_PEOPLE} />
    <Item label={"Species"} href={URL_SPECIES} />
    <Item label={"Planets"} href={URL_PLANETS} />
    <Item label={"Spaceships"} href={URL_SPACESHIPS} />
    <Item label={"Vehicles"} href={URL_VEHICLES} />
  </>
);

interface IItemProps {
  label: string;
  href: string;
}
const Item: React.StatelessComponent<IItemProps> = ({ label, href }) => (
  <NavItem>
    <NavLink tag={Link} to={href}>{label}</NavLink>
  </NavItem>
);

interface IHeader { onToggle: () => void };
const Header: React.StatelessComponent<IHeader> = ({ onToggle }) => (
  <>
    <NavbarBrand href="/"><h4>Star wars</h4></NavbarBrand>
    <NavbarToggler onClick={onToggle} />
  </>
);