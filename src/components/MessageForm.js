import '../css/style.css';
import React, { useEffect, useState, useRef } from 'react';
import { TextField, withStyles } from "@material-ui/core";
import MuiButtons from './MuiButtons';


const userName = 'Вадим';

const MessageInput = withStyles({
	root: {
		'& input ': {
			width: "500px",
			color: "#FFFFFF",
		},
		'& input + fieldset': {
			borderColor: '#b1b1b1',
			borderWidth: 2,
		},
		'& label': {
			color: "#FFFFFF"
		},
	},
})(TextField);


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
			<MessageInput
				autoFocus
				className='message-form__input'
				id="outlined-basic"
				label="Напишите сообщение..."
				onChange={handleChange}
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