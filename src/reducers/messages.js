import { ADD_MESSAGE, CLEAR_MESSAGES_BY_CHATID } from "../actions/messages";

const initialState = {};

export default function messagesReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				[action.payload.chatId]: [
					...(state[action.payload.chatId] || []),
					action.payload.message,
				],
			}
		}
		case CLEAR_MESSAGES_BY_CHATID: {
			delete state[action.payload.chatId]

			return {
				...state
			}
		}
		default:
			return state
	}
}
