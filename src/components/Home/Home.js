import '../../css/style.css';
import React from 'react';

export default function Home() {
	return (
		<main className="app__main main">
			<section className="home">
				<div className="home__inner container">
					<h2 className="home__title">Добро пожаловать!</h2>
					<p className="home__text">Если хочешь написать кому-то из своих контактов, перейди на страницу чатов.</p>
				</div>
			</section>
		</main>
	);
}