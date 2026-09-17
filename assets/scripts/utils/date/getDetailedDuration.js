/**
 * Retorna um objeto com a duração detalhada entre duas datas: anos, meses, dias, segundos e milissegundos.
 * @param {Date|string|number} birthDate - A data de início (ex: aniversário).
 * @param {Date|string|number} [compareDate=new Date()] - A data de fim (o padrão é agora).
 */

export const getDetailedDuration = (birthDate, compareDate = new Date()) => {
	const start = new Date(birthDate);
	const end = new Date(compareDate);

	if (isNaN(start) || isNaN(compareDate)) {
		throw new Error("Formato de data inválido");
	}

	let years = end.getFullYear() - start.getFullYear();
	let months = end.getMonth() - start.getMonth();
	let days = end.getDate() - start.getDate();
	let seconds = end.getSeconds() - start.getSeconds();
	let milliseconds = end.getMilliseconds() - start.getMilliseconds();

	// Ajuste dos dias, meses e segundos retroativos
	if (days < 0) {
		const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
		days += previousMonth.getDate();
		months--;
	}

	if (months < 0) {
		months += 12;
		years--;
	}

	if (seconds < 0) {
		seconds += 60;
	}

	return {
		years,
		months,
		days,
		seconds,
		milliseconds,
	};
};
