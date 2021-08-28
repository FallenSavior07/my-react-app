import '../../css/style.css';
import React, { useCallback } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Chat from '../Chat/Chat';
import { addMessageWithThunk, subscribeOnMessagesChangings, clearMessagesByChatId } from "../../actions/messages";
import { currentDate } from '../../shared/currentDate';
import { useIsChatExists } from '../../hooks/useIsChatExists';
import { useEffect } from 'react';

export default function ChatContainer() {
	const { chatId } = useParams();
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messages[chatId] || []);

	useEffect(() => {
		dispatch(subscribeOnMessagesChangings(chatId));

		return () => dispatch(clearMessagesByChatId(chatId))
	}, [chatId, dispatch])

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

	const isChatExists = useIsChatExists({ chatId });

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