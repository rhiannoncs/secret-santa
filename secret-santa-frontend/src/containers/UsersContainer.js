import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserLogin from '../components/UserLogin'
import WishesContainer from './WishesContainer'

class UsersContainer extends Component {

	render() {
		return (
			<div>
				<UserLogin login={this.props.login}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);