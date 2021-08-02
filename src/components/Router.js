import '../css/style.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Chat from './Chat';
import Chats from './Chats';
import Profile from './Profile';

export default function Router() {
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/chats" exact>
				<Chats />
			</Route>
			<Route path="/chats/:chatId">
				<Chat />
			</Route>
			<Route path="/profile">
				<Profile />
			</Route>
			<Route>
				<p>404: not found</p>
			</Route>
		</Switch>
	)
}
