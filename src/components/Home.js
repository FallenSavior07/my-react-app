import '../css/style.css';
import React from 'react';

export default function Home() {
	return (
		<main className="app__main main">
			<section className="home">
				<div className="container">
					<p className="home__text">Добро пожаловать! Если хочешь пообщаться со своими друзьями, перейди на страницу чатов.</p>
				</div>
			</section>
		</main>
	);
}