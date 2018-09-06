import React, { Component } from 'react';

export default class UserLogin extends Component {

	state = {
		email: '',
		password: ''
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	login = (event) => {
		event.preventDefault();

	}

	render () {
		return (
			<div>
				<h1>Log In</h1>
				<form onSubmit={ event => this.login(event) }>
					<label htmlFor="email">Email: </label><br />
					<input name="email" id-"email" type="email" onChange={event => this.handleChange(event)}/><br />
					<label htmlFor="password">Password: </label><br />
					<input name="password" id="password" type="password" onChange={event => this.handleChange(event)}/><br />
					<input type="submit">
				</form>
			</div>
			)
	}
}