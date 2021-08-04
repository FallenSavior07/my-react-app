import '../css/style.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageForm from './MessageForm';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { changeIsOnline, changeName } from '../actions/profile';
import { profileSelector } from '../selectors/profile';

const GreenCheckbox = withStyles({
	root: {
		color: "goldenrod",
		'&$checked': {
			color: "goldenrod",
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Profile() {
	const { age, name, isOnline } = useSelector(profileSelector);

	const dispatch = useDispatch();

	const handleChangeIsOnline = (event) => {
		dispatch(changeIsOnline(event.target.checked))
	}

	const handleChangeName = (newUserName) => {
		dispatch(changeName(newUserName));
	}

	return (
		<main className="app__main main">
			<section className="profile container">
				<h2 className="profile__title visually-hidden">Profile page</h2>
				<div className="profile__info">
					<p className="profile__name">Name: {name}</p>
					<p className="profile__age">Age: {age}</p>
					<FormControlLabel
						className="profile__online-status"
						control={<GreenCheckbox checked={isOnline} onChange={handleChangeIsOnline} name="checkedG" />}
						label="Is user online?"
					/>
				</div>
				<div className="chats__input">
					<MessageForm
						label="Введите новое имя..."
						onSubmit={handleChangeName}
					/>
				</div>
			</section>
		</main>
	)
}