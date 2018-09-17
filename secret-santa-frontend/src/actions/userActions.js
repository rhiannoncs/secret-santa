
export const login = (jwt) => {
	return {
		type: 'LOGIN',
		jwt
	}
}

export const fetchUserData = (jwt) => {
	return (dispatch) => {
		dispatch({ type: 'LOADING'});
		return fetch('http://localhost:3001/api/users/welcome', {
			headers: {'Authorization': `Bearer ${jwt}`}
		})
			.then(response => response.json())
			.then(user => dispatch({ type: 'ADD_NAME_AND_ID', username: user.name, userId: user.id}))
			.catch(error => console.error('Error:', error))
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT'
	}
}

export const fetchWishes = (userId, jwt) => {
	return (dispatch) => {
		dispatch({ type: 'LOADING' });
		return fetch(`http://localhost:3001/api/users/${userId}/wishes`, {
			headers: {'Authorization': `Bearer ${jwt}`}
		})
			.then(response => response.json())
			.then(wishes => dispatch({ type: 'ADD_WISHES', wishes: wishes}))
			.catch(error => console.error('Error:', error))
	}
}

export const newWish = (userId, jwt, content) => {
	return (dispatch) => {
		dispatch({type: 'LOADING'});
		const wish = {"wish": {"content": content, "user_id": userId}}
		return fetch(`http://localhost:3001/api/users/${userId}/wishes`, {
			method: 'POST',
			headers: {'Authorization': `Bearer ${jwt}`, 'Content-Type': 'application/json'},
			body: JSON.stringify(wish)
		}).then(response => response.json())
		.then(wish => dispatch({type: 'NEW_WISH', wish: wish}))
		.catch(error => console.error('Error:', error))
	}
}