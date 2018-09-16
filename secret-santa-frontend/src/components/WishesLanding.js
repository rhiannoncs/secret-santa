import React from 'react';
import WishesContainer from '../containers/WishesContainer'

const WishesLanding = (props) => {
	if (props.username.length > 0) {
		return <WishesContainer />;
	}
	return null;
}

export default WishesLanding;