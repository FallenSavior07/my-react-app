import '../../css/style.css';
import React, { useRef } from 'react';
import { TextField } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		display: "block",
		margin: "20px 0 0 0",
		'& input ': {
			width: "300px",
			color: "#FFFFFF",
		},
		'& input + fieldset': {
			borderColor: '#b1b1b1',
			borderWidth: 2,
		},
		'& label': {
			color: "#FFFFFF"
		},
	}
};

const LoginInput = withStyles(styles)(TextField);

export default function Input(props) {
	const {
		label = "Напишите сообщение...",
		onChange,
		type,
		value
	} = props;

	const inputRef = useRef(null);

	return (
		<LoginInput
			className="message-form__input"
			label={label}
			onChange={onChange}
			ref={inputRef}
			required
			type={type}
			variant="outlined"
			value={value}
		/>
	);
}