import * as React from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';
import {
  ROUTE_FILMS,
  ROUTE_PEOPLE,
  ROUTE_PLANETS,
  ROUTE_SPECIES,
  ROUTE_STARSHIPS,
  ROUTE_VEHICLES
} from '../model/routes';

interface INavigationState { isOpen: boolean };

export default class Navigation extends React.Component<{}, INavigationState> {
  public state = { isOpen: false };

  public render() {
    return (
      <Navbar className="mb-3" color="light" light={true} expand="md">
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

const Content: React.StatelessComponent<{}> = (props) => (
  <>
    <Item label={"Films"} href={ROUTE_FILMS} />
    <Item label={"People"} href={ROUTE_PEOPLE} />
    <Item label={"Species"} href={ROUTE_SPECIES} />
    <Item label={"Planets"} href={ROUTE_PLANETS} />
    <Item label={"Spaceships"} href={ROUTE_STARSHIPS} />
    <Item label={"Vehicles"} href={ROUTE_VEHICLES} />
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