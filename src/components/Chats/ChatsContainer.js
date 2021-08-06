import '../../css/style.css';
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Chats from '../Chats/Chats';
import { addChat, removeChat } from "../../actions/chats";
import { setCurrentChat } from "../../actions/chat";
import { chatsSelector } from '../../selectors/chats';
import { chatSelector } from '../../selectors/chat';

export default function ChatsContainer() {
	const history = useHistory();
	const dispatch = useDispatch();
	const chats = useSelector(chatsSelector);
	const currentChat = useSelector(chatSelector);
	console.log(currentChat);

	const handleChatLinkClick = (chat) => {
		handleSetCurrentChat(chat);
		history.push(`/chats/${chat.id}`);
	}

	const handleSetCurrentChat = (chat) => {
		dispatch(setCurrentChat(chat));
	}

	const handleAddChat = (userName) => {
		dispatch(addChat(`chat${Date.now()}`, userName));
	}

	const handleRemoveChat = (chatId) => {
		dispatch(removeChat(chatId));
	}

	return (
		<Chats
			chats={chats}
			currentChat={currentChat}
			handleChatLinkClick={handleChatLinkClick}
			handleAddChat={handleAddChat}
			handleRemoveChat={handleRemoveChat}
		/>
	);
}