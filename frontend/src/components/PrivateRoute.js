import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

	const PrivateRoute = ({ component: Component, ...rest }) => {
    let userLoggedIn;
		try {
			userLoggedIn = localStorage.getItem('logintoken').length>10?1:0;
		} catch(e) {
      userLoggedIn = false;
    }
		
		return (
			<Route
				{...rest}
				render={(props) => (
					userLoggedIn===1
						? <Component {...props} />
						: (
							<Redirect to={{
								pathname: '/',
							}}
							/>
						)
				)}
			/>
		);
	};

	PrivateRoute.propTypes = {
		component: PropTypes.elementType.isRequired,
	};

	export default PrivateRoute;