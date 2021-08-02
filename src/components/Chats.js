import '../css/style.css';
import React from 'react';
import { useHistory } from 'react-router';
import { List, ListItem } from "@material-ui/core";
import MessageForm from './MessageForm';

export default function Chats(props) {
	const {
		chats = [],
		currentChat,
		changeChat,
		onAddChat,
		onRemoveChat,
	} = props;
	const history = useHistory();

	const handleChatLinkClick = (chat) => {
		changeChat(chat)
		history.push(`/chats/${chat.id}`)
	}

	return (
		<main className="app__main main">
			<section className="sidebar chats">
				<List className="chats__list">
					{chats.map((chat) => {
						return <div>
							<ListItem
								className="chats__item"
								key={chat.id}
								selected={chat.id === currentChat.id}
								button
								onClick={() => handleChatLinkClick(chat)}
							>
								{chat.name}
							</ListItem>
							<button onClick={() => onRemoveChat(chat.id)} type="button">
								Удалить
							</button>
						</div>
					})}
				</List>
			</section>
			<section className="chat container">
				<MessageForm onSubmit={onAddChat} />
			</section>
		</main>
	);
}