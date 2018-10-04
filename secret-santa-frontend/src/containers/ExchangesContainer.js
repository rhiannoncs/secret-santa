import React, { Component } from 'react'
import { connect } from 'react-redux'

class ExchangesContainer extends Component {

	render () {
		return (
			<h3>Your Exchanges</h3>
			)
	}

}

export default connect()(ExchangesContainer);