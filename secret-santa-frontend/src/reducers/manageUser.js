export default function manageUser(state = {
	loading: false, users: [], wishes: []
}, action) {
	switch (action.type) {
		case 'LOADING':
			return {...state, loading: true}

		case 'ADD_WISHES':
			return {loading: false, wishes: action.wishes}
	}


	return state;
}