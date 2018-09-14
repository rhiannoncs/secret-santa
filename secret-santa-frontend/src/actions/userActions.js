
export const login = (jwt) => {
	return {
		type: 'LOGIN',
		jwt
	}
}

export const fetchName = (jwt) => {
	return (dispatch) => {
		dispatch({ type: 'LOADING'});
		return fetch('http://localhost:3001/api/users/welcome', {
			headers: {'Authorization': `Bearer ${jwt}`}
		})
			.then(response => response.json())
			.then(user => dispatch({ type: 'ADD_NAME', username: user.name}))
			.catch(error => console.error('Error:', error))
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT'
	}
}

export const fetchWishes = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING' });
		return fetch('http://localhost:3001/api/users/1/wishes')
			.then(response => response.json())
			.then(wishes => dispatch({ type: 'ADD_WISHES', wishes: wishes}))
			.catch(error => console.error('Error:', error))
	}
}