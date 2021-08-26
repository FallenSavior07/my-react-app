import '../../css/style.css';
import React from 'react';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';

export default function Chat(props) {
	const { onAddMessage, messages } = props;

	return (
		<main className="app__main main">
			<section className="chat container">
				<div className="chat__wrapper">
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
					<MessageForm onSubmit={onAddMessage} />
				</div>
			</section>
		</main>
	);
}