import React from 'react';
import UserLogin from './UserLogin'
import UserWelcome from './UserWelcome'

const UserLanding = (props) => {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserWelcome username={props.username}/>;
	}
	return <UserLogin login={props.login} addName={props.addName}/>
}

export default UserLanding;