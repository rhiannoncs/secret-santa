import React, { Component } from 'react';
import Wish from './Wish'

export default class Wishes extends Component {
	generateWishes = () => this.props.wishes.map((wish, index) => <Wish key={wish.index} content={wish.content} />)
	render () {
		return (
			<ul>
				{this.generateWishes()}
			</ul>

			)
	}
}