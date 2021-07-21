import './css/style.css';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Message from './Message';
import MessageForm from './MessageForm';

const userName = 'Вадим';
const robotMessage = `Привет, ${userName}! Как дела?`;

export default function Chat(props) {
	const [messageList, setMessageList] = useState([]);
	const timer = useRef(null);

	const getDate = () => {
		let currentDate = new Date().toLocaleDateString();
		let currentTime = new Date().toLocaleTimeString().slice(0, -3);
		return [currentDate, currentTime].join(", ");
	}

	const updateMessageList = useCallback((message, userName) => {
		if (message !== '') {
			let currentDate = getDate();
			console.log(message);
			setMessageList([...messageList, { author: userName, text: message, date: currentDate },]);
		}
	}, [messageList]);

	useEffect(() => {
		if (messageList.length !== 0 && messageList[messageList.length - 1].author === userName) {
			timer.current = setTimeout(() => {
				updateMessageList(robotMessage, 'Робот Василий');
			}, 1500);
		}
	}, [messageList, updateMessageList]);

	useEffect(() => {
		return clearTimeout(timer.current)
	}, []);

	return (
		<React.Fragment>
			<MessageForm updateMessageList={updateMessageList} />
			<ul className="message-list">
				{messageList.map((message, i) => {
					return <li className="message-list__item message" key={i}>
						<Message
							author={message.author}
							date={message.date}
							text={message.text} />
					</li>
				})}
			</ul>
		</React.Fragment>
	);
}