import React from 'react';
import Wish from './Wish'

const Wishes = (props) => {
	const generateWishes = () => props.wishes.map((wish, index) => <Wish key={index} content={wish.content} />)
	
		return (
			<ul>
				{generateWishes()}
			</ul>

			)
}

export default Wishes