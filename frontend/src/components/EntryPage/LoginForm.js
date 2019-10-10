import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Login from "./Login";
class Loginform extends Component {
  state = {
    isAuthenticated: false
  };
  handleSuccessfulLogin = () => {
    this.setState({
      isAuthenticated: true
    });
  };
  render() {
    const { isAuthenticated } = this.state;
    return (
      <div>
        {isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/Rules"
            }}
          />
        ) : (
          <Login onSuccessfulLogin={this.handleSuccessfulLogin} />
        )}
      </div>
    );
  }
}

export default Loginform;
