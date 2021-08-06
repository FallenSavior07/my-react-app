import { SET_CURRENT_CHAT } from "../actions/chat";

const initialState = { id: 'chat1' };

export default function chatReducer(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_CHAT: {
			return {
				id: action.payload.id
			}
		}
		default:
			return state
	}
}