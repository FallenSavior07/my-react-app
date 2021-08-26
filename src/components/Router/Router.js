import '../../css/style.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../Home/Home';
import ChatsContainer from '../Chats/ChatsContainer';
import ChatContainer from '../Chat/ChatContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import GistsList from '../GistsList/GistsList';
import { Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { useSelector } from 'react-redux';

export default function Router() {
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<PrivateRoute path="/chats" exact>
				<ChatsContainer />
			</PrivateRoute>
			<PrivateRoute path="/chats/:chatId">
				<ChatContainer />
			</PrivateRoute>
			<PrivateRoute path="/profile">
				<ProfileContainer />
			</PrivateRoute>
			<Route path="/gists">
				<GistsList />
			</Route>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/signup">
				<SignUp />
			</Route>
			<Route path="/gists">
				<GistsList />
			</Route>
			<Route>
				<p>404: not found</p>
			</Route>
		</Switch>
	)
}
