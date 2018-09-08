export default function manageUser(state = {
	loading: false, jwt: [], wishes: []
}, action) {
	switch (action.type) {
		case 'LOADING':
			return {...state, loading: true}

		case 'ADD_WISHES':
			return {...state, loading: false, wishes: action.wishes}

		case 'LOGIN':
			console.log({...state, loading: false, jwt: action.jwt})
			return {...state, loading: false, jwt: action.jwt}

		default:
			return state;
	}
}