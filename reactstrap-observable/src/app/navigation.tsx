import * as React from 'react';
import { Link } from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledCollapse
} from 'reactstrap';
import {
  ROUTE_FILMS,
  ROUTE_PEOPLE,
  ROUTE_PLANETS,
  ROUTE_SPECIES,
  ROUTE_STARSHIPS,
  ROUTE_VEHICLES
} from '../model/routes';

const Navigation: React.SFC<{}> = () => {
  return (
    <Navbar className="mb-3" color="light" light={true} expand="md">
      <NavbarBrand href="/"><h4>Star wars</h4></NavbarBrand>
      <NavbarToggler id='navBarToggler' />
      <UncontrolledCollapse toggler='navBarToggler' navbar={true}>
        <Nav className="ml-auto" navbar={true}>
          <Content />
        </Nav>
      </UncontrolledCollapse>
    </Navbar>
  );
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

export default Navigation