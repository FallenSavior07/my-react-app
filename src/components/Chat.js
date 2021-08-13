import '../css/style.css';
import React, {
	useRef,
	useEffect,
	useCallback,
} from 'react';
import { Redirect, useParams } from 'react-router'
import Message from './Message';
import MessageForm from './MessageForm';
import { AUTHORS, MESSAGES } from './App/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../actions/messages";

export default function Chat() {
	const { chatId } = useParams();
	const timer = useRef(null);
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messages[chatId] || []);

	const getDate = () => {
		let currentDate = new Date().toLocaleDateString();
		let currentTime = new Date().toLocaleTimeString().slice(0, -3);
		return [currentDate, currentTime].join(", ");
	}

	const generateId = useCallback(() => {
		let num = Math.floor(Math.random() * 999);
		Object.values(messages).forEach((message) => {
			if (message.id === `message${num}`) {
				generateId();
			}
		})
		return `message${num}`
	}, [messages]);

	const updateMessageList = useCallback((message, userName) => {
		if (message !== '') {
			let currentDate = getDate();
			dispatch(addMessage(chatId, {
				id: generateId(),
				author: userName,
				text: message,
				date: currentDate,
			}));
		}
	}, [chatId, dispatch, generateId]);

	useEffect(() => {
		if (messages.length !== 0 && messages[messages.length - 1].author === AUTHORS.ME) {
			timer.current = setTimeout(() => {
				updateMessageList(MESSAGES.DEFAULT_BOT_MESSSAGE, AUTHORS.BOT);
			}, 1500);
		}
	}, [messages, updateMessageList]);

	useEffect(() => {
		return clearTimeout(timer.current)
	}, []);

	const useIsChatExists = ({ chatId }) => {
		const chats = useSelector((state) => state.chats)

		return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
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