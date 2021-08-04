import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import profileReducer from './reducers/profile';
import messagesReducer from './reducers/messages'
import chatsReducer from './reducers/chats';
import chatReducer from './reducers/chat';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	chat: chatReducer,
	chats: chatsReducer,
	messages: messagesReducer,
	profile: profileReducer,
});

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);