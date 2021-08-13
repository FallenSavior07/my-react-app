import '../../css/style.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../Home/Home';
import ChatsContainer from '../Chats/ChatsContainer';
import ChatContainer from '../Chat/ChatContainer';
import ProfileContainer from '../Profile/ProfileContainer';

export default function Router() {
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/chats" exact>
				<ChatsContainer />
			</Route>
			<Route path="/chats/:chatId">
				<ChatContainer />
			</Route>
			<Route path="/profile">
				<ProfileContainer />
			</Route>
			<Route>
				<p>404: not found</p>
			</Route>
		</Switch>
	)
}
