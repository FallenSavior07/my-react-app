import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { changeIsOnline, changeName } from '../../actions/profile';
import { render } from "@testing-library/react";
import ProfileContainer from './ProfileContainer';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Profile test', () => {
	it('matches snapshot online', () => {
		const store = mockStore(() => ({ profile: {} }));

		const component = render(
			<Provider store={store}>
				<ProfileContainer />
			</Provider>
		);

		expect(component).toMatchSnapshot();
	});


	it('dispatches changeName', () => {
		let state = {};
		const store = mockStore(() => state);
		store.dispatch(changeName('John'));

		const actions = store.getActions().map(({ type, payload }) => ({ type, payload }));
		const expectedActions = [{ type: 'PROFILE::CHANGE_NAME', payload: { name: 'John' } }];
		expect(actions).toEqual(expectedActions);
	});

	it('dispatches changeIsOnline', () => {
		let state = {};
		const store = mockStore(() => state);
		store.dispatch(changeIsOnline('false'));

		const actions = store.getActions().map(({ type, payload }) => ({ type, payload }));
		const expectedActions = [{ type: 'PROFILE::CHANGE_IS_ONLINE', payload: { isOnline: 'false' } }];
		expect(actions).toEqual(expectedActions);
	});
})