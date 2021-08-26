import '../../css/style.css';
import React from 'react';
import firebase from 'firebase';
import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function SignUp(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleEmailChange = (event) => setEmail(event.target.value);
	const handlePassChange = (event) => setPassword(event.target.value);

	const handleSignUp = async () => {
		try {
			await firebase.auth().createUserWithEmailAndPassword(email, password);
		} catch (error) {
			setError(error.message);
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setError('');
		if (!email) {
			setError('Вы не ввели адрес электронной почты');
			return;
		}
		if (!password) {
			setError('Вы не ввели пароль');
			return;
		}
		handleSignUp();
	}

	return (
		<main className="app__main main">
			<section className="sign">
				<div className="sign__inner container">
					<form className="sign__form sign-form" action="#" onSubmit={handleSubmit}>
						<Input
							className="sign-form__input"
							label="Введите адрес электронной почты"
							onChange={handleEmailChange}
							type="email"
							value={email}
						/>
						<Input
							className="sign-form__input"
							label="Введите пароль"
							onChange={handlePassChange}
							type="text"
							value={password}
						/>
						<Button
							className="sign-form__button"
							text="Создать аккаунт"
						/>
					</form>
				</div>
			</section>
		</main>
	)
}