import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserLanding from '../components/UserLanding'
import WishesContainer from './WishesContainer'
import { login, fetchName } from '../actions/userActions'

class UsersContainer extends Component {

	render() {
		return (
			<div>
				<UserLanding login={this.props.login} isLoggedIn={isLoggedIn(this.props.jwt)} 
				addName={this.props.fetchName} username={this.props.username}/>
				Wishes Container
			</div>
			)
	}

}

const mapStateToProps = (state) => {
	return {
		jwt: state.jwt,
		username: state.username
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({ login, fetchName }, dispatch)
	}
}

const isLoggedIn = (jwt) => jwt.length > 0;

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);