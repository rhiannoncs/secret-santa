import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserLanding from '../components/UserLanding'
import WishesContainer from './WishesContainer'

class UsersContainer extends Component {

	render() {
		return (
			<div>
				<UserLanding login={this.props.login} isLoggedIn={isLoggedIn(this.props.jwt)} />
				Wishes Container
			</div>
			)
	}

}

const mapStateToProps = (state) => {
	return {
		jwt: state.jwt
	}
}

const mapDispatchToProps = (dispatch) => ({
	login: jwt => dispatch({type: 'LOGIN', jwt})
})

const isLoggedIn = (array) => array.length > 0;

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);