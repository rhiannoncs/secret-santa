import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWishes } from '../actions/userActions'

import Wishes from '../components/Wishes'

class WishesContainer extends Component {

	componentDidMount() {
		if (this.props.userId > 0) {
			this.props.fetchWishes(this.props.userId, this.props.jwt)
		}
	}

	render() {
		return (
			<div>
				<Wishes wishes={this.props.wishes} />
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		wishes: state.wishes,
		userId: state.userId,
		jwt: state.jwt
	}
}

export default connect(mapStateToProps, {fetchWishes})(WishesContainer);