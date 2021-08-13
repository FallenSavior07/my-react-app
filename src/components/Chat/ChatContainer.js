import '../../css/style.css';
import React, { useCallback } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Chat from '../Chat/Chat';
import { addMessageWithThunk } from "../../actions/messages";
import { chatsSelector } from '../../selectors/chats';
import { currentDate } from '../../shared/currentDate';

export default function ChatContainer() {
	const { chatId } = useParams();
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messages[chatId] || []);

	const onAddMessage = useCallback((message, userName) => {
		if (message !== '') {
			dispatch(addMessageWithThunk(chatId, {
				id: `message${Date.now()}`,
				author: userName,
				text: message,
				date: currentDate(),
			}));
		}
	}, [chatId, dispatch]);

	const useIsChatExists = ({ chatId }) => {
		const chats = useSelector(chatsSelector);
		return Boolean(Object.values(chats).find((chat) => chat.id === chatId));
	}

	const isChatExists = useIsChatExists({ chatId })

	if (!isChatExists) {
		return <Redirect to="/chats" />
	}

	return (
		<Chat
			messages={messages}
			onAddMessage={onAddMessage}
		/>
	);
}