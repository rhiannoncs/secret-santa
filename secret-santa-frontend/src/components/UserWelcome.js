import React from 'react';

const UserWelcome = (props) => {
	return (
		<div>
			<h2>Welcome, {props.username}!</h2>
			<button onClick={props.logout}>Log Out</button>
		</div>
		);
};

export default UserWelcome;