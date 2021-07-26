import '../css/style.css';
import React from 'react';
import { useHistory } from 'react-router';
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";

export default function HomePage(props) {
	const {
		chats = [],
		currentChat,
		ChangeChat
	} = props;

	const history = useHistory();

	const handleChatLinkClick = (chat) => {
		ChangeChat(chat);
		history.push(`/chats/${chat.id}`)
	}

	return (
		<main className="app__main main">
			<section className="sidebar chats">
				<List className="chats__list">
					{chats.map((chat) => {
						return <ListItem
							className="chats__item"
							key={chat.id}
							selected={chat.id === currentChat.id}
							button
							onClick={() => handleChatLinkClick(chat)}
						>
							{chat.name}
						</ListItem>
					})}
				</List>
			</section>
		</main>
	);
}