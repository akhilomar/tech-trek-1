import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { PrivateRoute } from '../PrivateRoute';
import Rules from '../Rules';
import { withRouter } from 'react-router-dom';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import { NavLink, NavItem } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import '../../App.css';
import PropTypes from 'prop-types';
import { setInterval } from 'timers';
import superagent from 'superagent';
class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}
	handleuserNameChanged(event) {
		this.setState({ username: event.target.value });
	}
	handlePasswordChanged(event) {
		this.setState({ password: event.target.value });
	}
	submitForm(event) {
		event.preventDefault();
		const payload = {
			username: this.state.username,
			password: this.state.password
		};
		superagent
			.post('http://127.0.0.1:8000/accounts/api/token/')
			.set('Content-Type', 'application/json')
			.send(payload)
			.then((res) => {
				console.log(res.body.access);
				localStorage.setItem('logintoken', res.body.access);
				this.props.onSuccessfulLogin();
			})
			.catch((err) => {
				console.log('err', err);
			});
	}
	isAuthenticated() {
		const token = localStorage.getItem('token');
		return token && token.length > 10;
	}
	render() {
		return (
			<div className="inner-container">
				<div className="header">Login</div>
				<div className="box">
					<form className="form-signin" onSubmit={this.submitForm.bind(this)} name="mail">
						<h2 className="form-signin-heading">Please login</h2>
						<input
							type="text"
							className="form-control"
							value={this.state.username}
							onChange={this.handleuserNameChanged.bind(this)}
							placeholder="User Name"
						/>
						<input
							type="password"
							className="form-control"
							value={this.state.password}
							name="password"
							placeholder="Password"
							onChange={this.handlePasswordChanged.bind(this)}
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
