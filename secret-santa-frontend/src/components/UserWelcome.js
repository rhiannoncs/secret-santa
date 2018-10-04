import React from 'react';
import WishesLanding from './WishesLanding'
import ExchangesContainer from '../containers/ExchangesContainer'

const UserWelcome = (props) => {
	return (
		<div>
			<h2>Welcome, {props.username}!</h2>
			<button onClick={props.logout}>Log Out</button>
			<ExchangesContainer />
			<WishesLanding username = {props.username} addWish={props.addWish} jwt={props.jwt} userId={props.userId}/>
		</div>
		);
};

export default UserWelcome;