import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import profileReducer from './reducers/profile';
import messagesReducer from './reducers/messages'
import chatsReducer from './reducers/chats';
import chatReducer from './reducers/chat';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	chat: chatReducer,
	chats: chatsReducer,
	messages: messagesReducer,
	profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
