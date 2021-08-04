import '../css/style.css';
import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { Button, Icon, TextField } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AUTHORS } from './App/constants';

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

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		color: "#FFFFFF"
	},
}));

export default function MessageForm(props) {
	const {
		label = "Напишите сообщение...",
		onSubmit
	} = props;

	const classes = useStyles();

	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(value, AUTHORS.ME);
		setValue('');
	}

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, [])


	return (
		<form className="chat__form message-form" action="#" onSubmit={handleSubmit}>
			<MessageInput
				autoFocus
				className='message-form__input'
				id="outlined-basic"
				label={label}
				onChange={handleChange}
				ref={inputRef}
				required
				type="text"
				variant="outlined"
				value={value} />
			<Button
				variant="contained"
				color="primary"
				className={clsx(classes.button, 'message-form__button')}
				endIcon={<Icon>send</Icon>}
				type="submit"
				onClick={props.click}
			>
				Отправить
			</Button>
		</form >
	);
}