import React, { Component } from "react";
import "../../App.css";
import superagent from "superagent";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    const elem = e.target;
    this.setState({
      [elem.name]: elem.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    const payload = {
      username: this.state.username,
      password: this.state.password
    };
    superagent
      .post("http://127.0.0.1:8000/accounts/api/token/")
      .set("Content-Type", "application/json")
      .send(payload)
      .then(res => {
        localStorage.setItem("logintoken", res.body.access);
        this.props.onSuccessfulLogin();
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 10;
  }
  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <form className="form-signin" onSubmit={this.submitForm} name="mail">
            <h2 className="form-signin-heading">Please login</h2>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="User Name"
            />
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
