import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserLanding from '../components/UserLanding'
import { login, fetchUserData, logout } from '../actions/userActions'

class UsersContainer extends Component {

	render() {
		return (
			<div>
				<UserLanding login={this.props.login} isLoggedIn={isLoggedIn(this.props.jwt)} 
				addUserData={this.props.fetchUserData} username={this.props.username} logout={this.props.logout} />
			</div>
			)
	}

}

const mapStateToProps = (state) => {
	return {
		jwt: state.jwt,
		username: state.username,
		userId: state.userId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({ login, fetchUserData, logout }, dispatch)
	}
}

const isLoggedIn = (jwt) => jwt.length > 0;

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);