import './css/style.css';
import React, { useEffect, useState, useRef } from 'react';
import { TextField } from "@material-ui/core";
import MuiButtons from './MuiButtons';

const userName = 'Вадим';

export default function MessageForm(props) {
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		event.target[0].value = '';
		setValue('');
	}

	const handleClick = () => {
		props.updateMessageList(value, userName);
	}

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, [])

	return (
		<form className="message-form" action="#" onSubmit={handleSubmit}>
			<TextField
				autoFocus
				className="message-form__input"
				id="outlined-basic"
				label="Outlined"
				onChange={handleChange}
				placeholder="Напишите сообщение..."
				ref={inputRef}
				required
				type="text"
				variant="outlined" />
			<MuiButtons
				className="message-form__button"
				click={handleClick} />
		</form >
	);
}