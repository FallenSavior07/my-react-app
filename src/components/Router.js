import '../css/style.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './HomePage';
import Chat from './Chat';
import Chats from './Chats';
import Profile from './Profile';

export default function Router(props) {
	return (
		<Switch>
			<Route
				path="/"
				exact
				render={() => (
					<HomePage
						chats={props.chats}
						currentChat={props.currentChat}
						changeChat={props.changeChat}
					/>
				)}
			/>
			<Route
				exact
				path="/chats"
				render={() => (
					<Chats
						chats={props.chats}
						currentChat={props.currentChat}
						changeChat={props.changeChat}
						getIsChatExists={props.getIsChatExists}
						onAddChat={props.onAddChat}
						onRemoveChat={props.onRemoveChat}
					/>
				)}
			/>
			<Route
				path="/chats/:chatId"
				render={() => {
					return <Chat getIsChatExists={props.getIsChatExists} />
				}}
			/>
			<Route
				path="/profile"
				render={() => {
					return <Profile />
				}}
			/>
			<Route>
				<p>404: not found</p>
			</Route>
		</Switch>
	)
}
