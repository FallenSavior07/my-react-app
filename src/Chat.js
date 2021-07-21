import './css/style.css';
import React from 'react';
import Message from './Message';

export default function Chat(props) {
	return (
		<ul className="chat">
			{props.messages.map((message, i) => {
				return <li className="chat__item message" key={i}>
					<Message
						author={message.author}
						date={message.date}
						text={message.text} />
				</li>
			})}
		</ul>
	);
}