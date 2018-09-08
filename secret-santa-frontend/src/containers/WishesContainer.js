import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWishes } from '../actions/userActions'

import Wishes from '../components/Wishes'

class WishesContainer extends Component {

	componentDidMount() {
		this.props.fetchWishes()
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
		wishes: state.wishes
	}
}

export default connect(mapStateToProps, {fetchWishes})(WishesContainer);