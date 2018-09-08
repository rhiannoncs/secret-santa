

export function fetchWishes() {
	return (dispatch) => {
		dispatch({ type: 'LOADING' });
		return fetch('http://localhost:3001/api/users/1/wishes')
			.then(response => response.json())
			.then(wishes => dispatch({ type: 'ADD_WISHES', wishes: wishes}))
			.catch(error => console.error('Error:', error))
	}
}