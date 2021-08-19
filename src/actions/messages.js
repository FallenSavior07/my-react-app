import { AUTHORS, MESSAGES } from '../components/App/constants';
import { currentDate } from '../shared/currentDate';
import firebase from 'firebase';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
	type: ADD_MESSAGE,
	payload: {
		chatId,
		message
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
					author: AUTHORS.BOT,
					text: MESSAGES.DEFAULT_BOT_MESSSAGE,
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