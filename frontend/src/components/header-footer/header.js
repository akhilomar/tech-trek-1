import React from 'react';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      isOpen: false,
      users: ""
    };
  }
  componentWillMount(){
    this.gettingUsername();
  }
gettingUsername=()=>{
  const localtoken=localStorage.getItem('logintoken')
  fetch('http://127.0.0.1:8000/accounts/api/', {
    method: 'GET',
    headers : { 
      'Authorization' : `Bearer ${localtoken}`
    }
})
.then((res) => res.json())
.then((response) => {
    this.setState({
      users: response.username
    })
})
}
  toggle=()=>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  clearLocal=()=>{
    localStorage.clear("logintoken");
  }
  render() {
    console.log(this.state.users)
    
  
    return (
      <div>
        <Navbar expand="md">

          <NavbarBrand href="/">
          <a className="user" href="#"><img src="https://i.pinimg.com/originals/27/47/ed/2747edad39a6a4e9fbcfbf3c53822649.png" alt="" className="nav-avatar"/>{this.state.users}</a></NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/Rules">Rules</Link>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                <Link to="/Dashboard">Dashboard</Link>
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                <Link to="/Leaderboard" active>Leaderboard</Link>
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                <Link to="/" onClick={this.clearLocal.bind(this)}>Logout</Link>
              </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;