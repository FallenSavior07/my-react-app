import { CHANGE_NAME, CHANGE_IS_ONLINE } from '../actions/profile';

const initialState = {
	name: 'Вадим',
	age: 29,
	isOnline: true
}

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_NAME: {
			return {
				...state,
				name: action.payload.name,
			}
		}
		case CHANGE_IS_ONLINE: {
			return {
				...state,
				isOnline: action.payload.isOnline
			}
		}
		default:
			return state
	}
}
