import '../../css/style.css';
import React from 'react';
import clsx from 'clsx';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		width: "200px",
		color: "#FFFFFF",
		margin: "20px 0 0 0",
	},
}));

export default function LoginButton(props) {
	const {
		className,
		onSubmit,
		text,
		type = "submit"
	} = props;

	const classes = useStyles();

	return (
		<Button
			variant="contained"
			color="primary"
			className={clsx(classes.button, className)}
			onClick={onSubmit}
			type={type}
		>
			{text}
		</Button>
	);
}