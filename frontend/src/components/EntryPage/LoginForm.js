import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login';
class Loginform extends Component {
	state = {
		isAuthenticated: false
	};
	handleSuccessfulLogin() {
		console.log('test');
		this.setState({
			isAuthenticated: true
		});
	}
	render() {
		const { isAuthenticated } = this.state;
		console.log('isAuthenticated', isAuthenticated);
		return (
			<div>
				{isAuthenticated ? (
					<Redirect
						to={{
							pathname: '/Rules'
						}}
					/>
				) : (
					<Login onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)} />
				)}
			</div>
		);
	}
}

export default Loginform;
