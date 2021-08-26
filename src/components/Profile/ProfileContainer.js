import '../../css/style.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
import { changeIsOnline, changeName } from '../../actions/profile';
import { profileSelector } from '../../selectors/profile';
import firebase from 'firebase';

export default function ProfileContainer() {
	const { age, name, isOnline } = useSelector(profileSelector);

	const dispatch = useDispatch();

	const handleChangeIsOnline = (event) => {
		dispatch(changeIsOnline(event.target.checked))
	}

	const handleChangeName = (newUserName) => {
		dispatch(changeName(newUserName));
	}

	const handleSignOut = (event) => {
		event.preventDefault()
		firebase.auth().signOut()
	}

	return (
		<Profile
			age={age}
			name={name}
			isOnline={isOnline}
			handleChangeIsOnline={handleChangeIsOnline}
			handleChangeName={handleChangeName}
			handleSignOut={handleSignOut}
		/>
	)
}