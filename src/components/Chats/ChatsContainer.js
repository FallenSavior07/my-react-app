import '../../css/style.css';
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Chats from '../Chats/Chats';
import { addChatToDatabase, removeChatFromDatabase, subscribeOnChatsChangings } from "../../actions/chats";
import { setCurrentChat } from "../../actions/chat";
import { chatsSelector } from '../../selectors/chats';
import { chatSelector } from '../../selectors/chat';
import { useEffect } from 'react';

export default function ChatsContainer() {
	const history = useHistory();
	const dispatch = useDispatch();
	const chats = useSelector(chatsSelector);
	const currentChat = useSelector(chatSelector);

	useEffect(() => {
		dispatch(subscribeOnChatsChangings());
	})

	const handleOpenChat = (chat) => {
		handleSetCurrentChat(chat);
		history.push(`/chats/${chat.id}`);
	}

	const handleSetCurrentChat = (chat) => {
		dispatch(setCurrentChat(chat));
	}

	const handleAddChat = (userName) => {
		dispatch(addChatToDatabase(`chat${Date.now()}`, userName));
	}

	const handleRemoveChat = (chatId) => {
		dispatch(removeChatFromDatabase(chatId));
	}

	return (
		<Chats
			chats={chats}
			currentChat={currentChat}
			handleOpenChat={handleOpenChat}
			handleAddChat={handleAddChat}
			handleRemoveChat={handleRemoveChat}
		/>
	);
}