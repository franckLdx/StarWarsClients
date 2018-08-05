import * as React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

// tslint:disable-next-line:no-empty-interface
interface INavigationProps { };
interface INavigationState { isOpen: boolean };

export default class Navigation extends React.Component<INavigationProps, INavigationState> {
  public state = { isOpen: false };

  public render() {
    return (
      <Navbar color="light" light={true} expand="md">
        <Header onToggle={this.onToggle} />
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            <Item label={"Films"} />
            <Item label={"People"} />
            <Item label={"Species"} />
            <Item label={"Planets"} />
            <Item label={"Spaceships"} />
            <Item label={"Vehicles"} />
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


interface IItemProps {
  label: string;
}
const Item: React.StatelessComponent<IItemProps> = ({ label }) => (
  <NavItem>
    <NavLink>{label}</NavLink>
  </NavItem>
);

interface INavHeader { onToggle: () => void };
const Header: React.StatelessComponent<INavHeader> = ({ onToggle }) => (
  <>
    <NavbarBrand href="/"><h4>Star wars</h4></NavbarBrand>
    <NavbarToggler onClick={onToggle} />
  </>
);