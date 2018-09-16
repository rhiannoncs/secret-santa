export default function manageUser(state = {
	loading: false, jwt: '', username: '', userId: 0, wishes: []
}, action) {
	switch (action.type) {
		case 'LOADING':
			return {...state, loading: true}

		case 'ADD_WISHES':
			return {...state, loading: false, wishes: action.wishes}

		case 'LOGIN':
			console.log(action)
			return {...state, jwt: action.jwt}

		case 'ADD_NAME_AND_ID':
			console.log(action)
			return {...state, loading: false, username: action.username, userId: action.userId}

		case 'LOGOUT':
			return{...state, jwt: '', username: '', userId: 0}

		default:
			return state;
	}
}