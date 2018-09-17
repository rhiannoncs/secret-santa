import React from 'react';
import UserLogin from './UserLogin'
import UserWelcome from './UserWelcome'

const UserLanding = (props) => {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserWelcome username={props.username} logout={props.logout} addWish={props.addWish} 
		jwt={props.jwt} userId={props.userId}/>;
	}
	return <UserLogin login={props.login} addUserData={props.addUserData}/>
}

export default UserLanding;