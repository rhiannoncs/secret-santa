export default function manageUser(state = {
	loading: false, jwt: [], username: [], wishes: []
}, action) {
	switch (action.type) {
		case 'LOADING':
			return {...state, loading: true}

		case 'ADD_WISHES':
			return {...state, loading: false, wishes: action.wishes}

		case 'LOGIN':
			return {...state, loading: false, jwt: action.jwt}

		case 'ADD_NAME':
			console.log(action.username)
			return {...state, loading: false, username: action.username}

		default:
			return state;
	}
}