export const SET_CURRENT_CHAT = 'CHATS::CHANGE_CHAT';

export const setCurrentChat = (chat) => ({
	type: SET_CURRENT_CHAT,
	payload: {
		id: chat.id,
	},
})
