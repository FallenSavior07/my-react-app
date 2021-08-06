import '../../css/style.css';
import React from 'react';
import MessageForm from '../MessageForm/MessageForm';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const GreenCheckbox = withStyles({
	root: {
		color: "goldenrod",
		'&$checked': {
			color: "goldenrod",
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Profile(props) {
	const {
		age,
		name,
		isOnline,
		handleChangeIsOnline,
		handleChangeName
	} = props;

	return (
		<main className="app__main main">
			<section className="profile container">
				<h2 className="profile__title visually-hidden">Profile page</h2>
				<div className="profile__info info">
					<p className="info__name">Name: {name}</p>
					<p className="info__age">Age: {age}</p>
				</div>
				<div className="profile__settings settings">
					<FormControlLabel
						className="settings__online-status"
						control={<GreenCheckbox checked={isOnline} onChange={handleChangeIsOnline} name="checkedG" />}
						label='Показывать статус "в сети"?'
					/>
					<MessageForm
						className="settings__name"
						label="Введите новое имя..."
						onSubmit={handleChangeName}
					/>
				</div>
				<div className="chats__input">

				</div>
			</section>
		</main>
	)
}