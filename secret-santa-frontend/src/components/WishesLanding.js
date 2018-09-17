import React, { Component } from 'react';
import WishesContainer from '../containers/WishesContainer'

export default class WishesLanding extends Component {

	state = {
		wishContent: ''
	}

	handleChange = (event) => {
		this.setState({
			wishContent: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addWish(this.props.userId, this.props.jwt, this.state.wishContent);
		this.setState({
			wishContent: ''
		})
	}

	render (){
		if (this.props.username.length > 0) {
			return (
				<div>
					<h3>Your Wish List:</h3>
					<WishesContainer />
					<form onSubmit={event => this.handleSubmit(event)}>
						<label htmlFor="wishContent">Add Wish: </label><br />
						<input type="text" name="wishContent" value={this.state.wishContent} 
						onChange={event => this.handleChange(event)}/><br />
						<input type="submit" />
					</form>
				</div>);
		}
		return null;
	}
}