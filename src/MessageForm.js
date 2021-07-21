import './css/style.css';
import React, { useEffect, useState, useRef } from 'react';
import { TextField } from "@material-ui/core";
import MaterialIcons from './MaterialIcons';

const userName = 'Вадим';

export default function MessageForm(props) {
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		event.target[0].value = '';
		event.preventDefault();
	}

	const handleClick = () => props.updateMessageList(value, userName);

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, [])

	return (
		<form className="message-form" action="#" onSubmit={handleSubmit}>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
				className="message-form__input"
				type="text"
				placeholder="Напишите сообщение..."
				onChange={handleChange}
				autoFocus="true"
				ref={inputRef} />
			<MaterialIcons
				className="message-form__button"
				click={handleClick} />
		</form >
	);
}