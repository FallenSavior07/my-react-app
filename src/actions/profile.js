export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE';
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED';

export const changeName = (name) => ({
	type: CHANGE_NAME,
	payload: {
		name
	},
});

export const changeIsOnline = (isOnline) => ({
	type: CHANGE_IS_ONLINE,
	payload: {
		isOnline
	}
});

export const changeIsAuthed = (isAuthed) => ({
	type: CHANGE_IS_AUTHED,
	payload: {
		isAuthed,
	},
})
