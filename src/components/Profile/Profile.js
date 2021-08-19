import '../../css/style.css';
import React from 'react';
import MessageForm from '../MessageForm/MessageForm';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import avatar from '../../img/avatar.png';
import Button from '../Button/Button';

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
		handleChangeName,
		handleSignOut
	} = props;

	return (
		<main className="app__main main">
			<section className="profile container">
				<h2 className="profile__title visually-hidden">Profile page</h2>
				<div className="profile__inner">
					<div className="profile__info info">
						<h4 className="info__title">Информация о пользователе</h4>
						<img className="info__image" src={avatar} alt="avatar" width="120" height="120" />
						<p className="info__name">Имя: {name}</p>
						<p className="info__age">Возраст: {age}</p>
					</div>
					<hr className="profile__line" />
					<div className="profile__settings settings">
						<h4 className="settings__title">Настройки</h4>
						<FormControlLabel
							className="settings__online-status"
							control={<GreenCheckbox
								checked={isOnline}
								onChange={handleChangeIsOnline}
								name="checkedG"
							/>}
							label='Показывать статус "в сети"?'
						/>
						<div className="settings__name change-name-form">
							<p className="change-name-form__label">Изменить имя</p>
							<MessageForm
								className="change-name-form__input"
								label="Введите новое имя..."
								onSubmit={handleChangeName}
							/>
						</div>
					</div>
					<hr className="profile__line" />
					<Button
						className="profile__exit-button"
						onSubmit={handleSignOut}
						text="Выйти из аккаунта"
						type="button"
					/>
				</div>
			</section>
		</main>
	)
}