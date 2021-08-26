import { render, screen } from "@testing-library/react";
import Message from "./Message";

describe('Message', () => {
	it('matches snapshot online', () => {
		const component = render(
			<Message
				author='Вадим'
				date='22.08.2021, 19:47'
				text='Привет!'
			/>
		);

		expect(component).toMatchSnapshot();
	});

	it(`should contain message text "Привет"`, () => {
		render(
			<Message
				text='Привет!'
			/>
		);

		const wrapper = screen.getByText(/Привет/i);

		expect(wrapper).toBeInTheDocument();
	});

	it(`should contain date like dd.mm.yyyy, hh:mm`, () => {
		render(
			<Message
				date='20.07.2021, 16:00'
			/>
		);

		const wrapper = screen.getByText(/^\d{2}\.\d{2}\.\d{4},\s\d{2}:\d{2}/i);

		expect(wrapper).toBeInTheDocument();
	});
})