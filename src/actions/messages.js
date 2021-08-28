import { currentDate } from '../shared/currentDate';
import firebase from 'firebase';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const CLEAR_MESSAGES_BY_CHATID = 'MESSAGES::CLEAR_MESSAGES_BY_CHATID';

export const addMessage = (chatId, message) => ({
	type: ADD_MESSAGE,
	payload: {
		chatId,
		message
	}
});

export const clearMessagesByChatId = (chatId) => ({
	type: CLEAR_MESSAGES_BY_CHATID,
	payload: {
		chatId
	}
});

export const addMessageWithThunk = (chatId, message) => {
	return () => {
		firebase.database()
			.ref('messages')
			.child(chatId)
			.push(message)

		let timer = setTimeout(() => {
			firebase.database()
				.ref('messages')
				.child(chatId)
				.push({
					id: `message${Date.now()}`,
					author: 'Робот Василий',
					text: `Привет, ${message.author}! Как дела?`,
					date: currentDate(),
				})

			clearTimeout(timer);
		}, 1500)
	}
}

export const subscribeOnMessagesChangings = (chatId) => {
	return (dispatch, getState) => {
		firebase.database()
			.ref('messages')
			.child(chatId)
			.on('child_added', (snapshot) => {
				dispatch(addMessage(chatId, snapshot.val()))
			});

		firebase.database()
			.ref('messages')
			.child(chatId)
			.on('child_changed', (snapshot) => {
				dispatch(addMessage(chatId, snapshot.val()))
			})
	}
}