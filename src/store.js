import { combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profile';
import messagesReducer from './reducers/messages'
import chatsReducer from './reducers/chats';
import chatReducer from './reducers/chat';

const rootReducer = combineReducers({
	chat: chatReducer,
	chats: chatsReducer,
	messages: messagesReducer,
	profile: profileReducer,
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);