
export function login(jwt) {
	return {
		type: 'LOGIN',
		jwt
	}
}

export function fetchName(jwt) {
	console.log("Called");
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

export function fetchWishes() {
	return (dispatch) => {
		dispatch({ type: 'LOADING' });
		return fetch('http://localhost:3001/api/users/1/wishes')
			.then(response => response.json())
			.then(wishes => dispatch({ type: 'ADD_WISHES', wishes: wishes}))
			.catch(error => console.error('Error:', error))
	}
}