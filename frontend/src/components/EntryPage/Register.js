import React, { Component } from "react";

import "../../App.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      year: "",
      branch: "",
      password: "",
      cpassword: "",
      mobile: "",
      email: "",
      errors: []
    };
  }

  handleJwt = () => {
    fetch("http://127.0.0.1:8000/accounts/api/register/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        const token = responseJson.token.access;
        localStorage.setItem("registertoken", token);
      })
      .catch(error => {
        console.log(error);
      });
  };

  Validation = (elm, msg) => {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  };
  clearValidation = elm => {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (err.elm !== elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  };

  handleChange = e => {
    const elem = e.target;
    this.setState({
      [elem.name]: elem.value
    });
    this.clearValidation(elem.name);
  };

  submitRegister = e => {
    if (this.state.name === "") {
      this.Validation("name", "Please enter your full name");
    }
    if (this.state.username === "") {
      this.Validation("username", "Username will be your identity, don't skip");
    }
    if (this.state.year === "") {
      this.Validation("year", "Enter your current year of study");
    }
    if (this.state.branch === "") {
      this.Validation("branch", "Oops!! you forget to enter branch");
    }
    if (this.state.password === "") {
      this.Validation("password", "Enter Password for security purpose");
    }
    if (this.state.cpassword === "") {
      this.Validation("cpassword", "Password didn't matched !!");
    }
    if (this.state.mobile === "") {
      this.Validation(
        "mobile",
        "Enter mobile No. so that we can contact you if you win"
      );
    }
    if (this.state.email === "") {
      this.Validation("email", "Provide mail for ease !!!");
    }
    if (
      this.state.name !== "" &&
      this.state.username !== "" &&
      this.state.year !== "" &&
      this.state.branch !== "" &&
      this.state.password !== "" &&
      this.state.cpassword !== "" &&
      this.state.mobile !== "" &&
      this.state.email !== ""
    ) {
      this.handleJwt();
      this.props.func();
    }
  };

  render() {
    let nameErr = null,
      usernameErr = null,
      yearErr = null,
      branchErr = null,
      passwordErr = null,
      cpasswordErr = null,
      mobileErr = null,
      emailErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "name") {
        nameErr = err.msg;
      }
      if (err.elm === "username") {
        usernameErr = err.msg;
      }
      if (err.elm === "year") {
        yearErr = err.msg;
      }
      if (err.elm === "branch") {
        branchErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
      if (err.elm === "cpassword") {
        cpasswordErr = err.msg;
      }
      if (err.elm === "mobile") {
        mobileErr = err.msg;
      }
      if (err.elm === "email") {
        emailErr = err.msg;
      }
    }
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="login-input"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <small className="danger-error">{nameErr ? nameErr : ""}</small>
          </div>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <small className="danger-error">
              {usernameErr ? usernameErr : ""}
            </small>
          </div>
          <div className="input-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              name="year"
              className="login-input"
              placeholder="Year"
              onChange={this.handleChange}
            />
            <small className="danger-error">{yearErr ? yearErr : ""}</small>
          </div>
          <div className="input-group">
            <label htmlFor="branch">Branch</label>
            <input
              type="text"
              name="branch"
              className="login-input"
              placeholder="Branch"
              onChange={this.handleChange}
            />
            <small className="danger-error">{branchErr ? branchErr : ""}</small>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="Password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>
          </div>
          <div className="input-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="Password"
              name="cpassword"
              className="login-input"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            <small className="danger-error">
              {cpasswordErr ? cpasswordErr : ""}
            </small>
          </div>
          <div className="input-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              name="mobile"
              className="login-input"
              placeholder="Mobile"
              onChange={this.handleChange}
            />
            <small className="danger-error">{mobileErr ? mobileErr : ""}</small>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <small className="danger-error">{emailErr ? emailErr : ""}</small>
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister}
          >
            Select Avatar
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
