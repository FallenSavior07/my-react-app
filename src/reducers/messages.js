import { ADD_MESSAGE } from "../actions/messages";

const initialState = {
	// chat1: [
	// 	{ id: 'message1', author: AUTHORS.ME, text: MESSAGES.DEFAULT_USER_MESSSAGE, date: null },
	// 	{ id: 'message2', author: AUTHORS.BOT, text: MESSAGES.DEFAULT_BOT_MESSSAGE, date: null },
	// ],
};

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
		default:
			return state
	}
}
