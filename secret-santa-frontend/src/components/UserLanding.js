import React from 'react';
import UserLogin from './UserLogin'
import UserWelcome from './UserWelcome'

const UserLanding = (props) => {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserWelcome />;
	}
	return <UserLogin login={props.login} />
}

export default UserLanding;