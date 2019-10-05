import React from 'react';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" fixed dark expand="md">

          <NavbarBrand href="/">
          <a className="user" href="#"><img src="https://i.pinimg.com/originals/27/47/ed/2747edad39a6a4e9fbcfbf3c53822649.png" alt="" className="nav-avatar"/>rajat verma</a></NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/Rules">Rules</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Leaderboard" active>Leaderboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Forum">Forum</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;