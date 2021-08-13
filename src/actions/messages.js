import { AUTHORS, MESSAGES } from '../components/App/constants';
import { currentDate } from '../shared/currentDate';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
	type: ADD_MESSAGE,
	payload: {
		chatId,
		message
	}
});

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
	dispatch(addMessage(chatId, message));
	setTimeout(() => {
		dispatch(
			addMessage(chatId, {
				id: `message${Date.now()}`,
				author: AUTHORS.BOT,
				text: MESSAGES.DEFAULT_BOT_MESSSAGE,
				date: currentDate(),
			})
		)
	}, 1500);
}