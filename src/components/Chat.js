import '../css/style.css';
import React, { useCallback } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import MessageForm from './MessageForm';
import { addMessageWithThunk } from "../actions/messages";
import { chatsSelector } from '../selectors/chats';
import { currentDate } from '../shared/currentDate';

export default function Chat() {
	const { chatId } = useParams();
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messages[chatId] || []);

	const updateMessageList = useCallback((message, userName) => {
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
		<main className="app__main main">
			<section className="chat container">
				<div className="chat__wrapper">
					<MessageForm onSubmit={updateMessageList} />
					<ul className="chat__list" > {
						messages.map((message, i) => {
							return <li className="chat__item message" key={message.id}>
								<Message
									author={message.author}
									date={message.date}
									text={message.text}
								/>
							</li>
						})
					} </ul>
				</div>
			</section>
		</main>
	);
}