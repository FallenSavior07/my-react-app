import './css/style.css';
import React from 'react';

export default function Message(props) {
	return (
		<React.Fragment>
			<div className="message__inner">
				<p className="message__user">{props.author}</p>
				<p className="message__date">{props.date}</p>
			</div>
			<p className="message__text">{props.text}</p>
		</React.Fragment>
	);
}