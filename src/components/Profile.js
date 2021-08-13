import '../css/style.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { changeIsOnline } from '../actions/profile';
import { profileSelector } from '../selectors/profile';

const GreenCheckbox = withStyles({
	root: {
		color: "goldenrod",
		'&$checked': {
			color: "goldenrod",
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Profile() {
	const { age, name, isOnline } = useSelector(profileSelector);

	const dispatch = useDispatch();

	const handleChangeIsOnline = (event) => {
		dispatch(changeIsOnline(event.target.checked))
	}

	return (
		<main className="app__main main">
			<section className="profile container">
				<h2 className="profile__text">Profile page</h2>
				<p className="profile__name">Name: {name}</p>
				<p className="profile__age">Age: {age}</p>
				<FormControlLabel
					className="profile__online-status"
					control={<GreenCheckbox checked={isOnline} onChange={handleChangeIsOnline} name="checkedG" />}
					label="Is user online?"
				/>
			</section>
		</main>
	)
}