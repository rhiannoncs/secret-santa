import React from 'react';
import WishesLanding from './WishesLanding'

const UserWelcome = (props) => {
	return (
		<div>
			<h2>Welcome, {props.username}!</h2>
			<button onClick={props.logout}>Log Out</button>
			<WishesLanding username = {props.username}/>
		</div>
		);
};

export default UserWelcome;