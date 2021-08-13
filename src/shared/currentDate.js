export const currentDate = () => {
	let date = new Date().toLocaleDateString();
	let time = new Date().toLocaleTimeString().slice(0, -3);
	return [date, time].join(", ");
}