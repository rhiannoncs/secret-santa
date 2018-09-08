import React, { Component } from 'react'
import UserLogin from '../components/UserLogin'
import WishesContainer from './WishesContainer'

export default class UsersContainer extends Component {

	render() {
		return (
			<div>
				<UserLogin />
				Wishes Container
			</div>
			)
	}

}