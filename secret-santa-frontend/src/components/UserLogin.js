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
		const email = this.state.email;
		const password = this.state.password;
		const request = {"auth": {"email": email, "password": password}};
		console.log(request)
		fetch('http://localhost:3001/api/user_token', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(request)
		}).then(res => res.json())
			.then(response => console.log(JSON.stringify(response)))
		this.setState({
			email: '',
			password: ''
		})

	}

	/*login  = (event) => {
		event.preventDefault();
    	const email = this.state.email;
		const password = this.state.password;
    	const request = {"auth": {"email": email, "password": password}}
    	console.log(request)
    	$.ajax({
      		url: "http://localhost:3001/api/user_token",
      		type: "POST",
      		data: request,
      		dataType: "json",
      		success: function (result) {
        		console.log(result)
        		localStorage.setItem("jwt", result.jwt)
      		}
    	})
    	this.setState({
			email: '',
			password: ''
		})
  	}*/

	render () {
		return (
			<div>
				<h1>Log In</h1>
				<form onSubmit={ event => this.login(event) }>
					<label htmlFor="email">Email: </label><br />
					<input name="email" id="email" type="email" onChange={event => this.handleChange(event)}/><br />
					<label htmlFor="password">Password: </label><br />
					<input name="password" id="password" type="password" onChange={event => this.handleChange(event)}/><br />
					<input type="submit" />
				</form>
			</div>
			)
	}
}