import * as React from 'react';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

// tslint:disable-next-line:no-empty-interface
interface IProps { };
interface IState {
  isOpen: boolean
};

export default class Example extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  public render() {
    return (
      <Navbar color="light" light={true} expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav={true} inNavbar={true}>
              <DropdownToggle nav={true} caret={true}>
                Options
                </DropdownToggle>
              <DropdownMenu right={true}>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider={true} />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}