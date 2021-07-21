import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

export default function IconLabelButtons(props) {
	const classes = useStyles();

	return (
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
	);
}
