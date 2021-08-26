import chatsReducer from '../reducers/chats';

describe('chats reducer tests', () => {
	it('should return the initial state', () => {
		const state = {
			chat1: { id: 'chat1', name: 'Александр' },
			chat2: { id: 'chat2', name: 'Владимир' },
			chat3: { id: 'chat3', name: 'Елена' }
		}

		expect(chatsReducer(state, {})).toEqual(state);
	});

	it('should add new chat', () => {
		const state = {
			chat1: { id: 'chat1', name: 'Александр' },
			chat2: { id: 'chat2', name: 'Владимир' },
			chat3: { id: 'chat3', name: 'Елена' }
		}

		const action = {
			type: 'CHATS::ADD_CHAT',
			payload: {
				id: 'chat4',
				name: 'Виктор'
			}
		}

		const expected = {
			...state,
			[action.payload.id]: action.payload,
		}

		expect(chatsReducer(state, action)).toEqual(expected);
	});

	it('should remove chat', () => {
		const state = {
			chat1: { id: 'chat1', name: 'Александр' },
			chat2: { id: 'chat2', name: 'Владимир' },
			chat3: { id: 'chat3', name: 'Елена' }
		}

		const action = {
			type: 'CHATS::REMOVE_CHAT',
			payload: {
				chatId: 'chat 1'
			},
		}

		const deleteChat = () => {
			delete state[action.payload.chatId];
			return {
				...state,
			}
		}

		expect(chatsReducer(state, action)).toEqual(deleteChat());
	});

})