/**
 * Calcula a duração detalhada entre duas datas sem interferência do fuso horário local.
 *
 * @param {Date|string|number} startData - Data inicial.
 * @param {Date|string|number} endData - Data final (padrão é agora).
 * @returns {Object} Objeto com diferença em anos, meses, dias, horas, minutos, segundos e milissegundos.
 */

export const getDetailedDuration = (startData, endData = new Date()) => {
	const start = new Date(startData);
	const end = new Date(endData);

	if (isNaN(start) || isNaN(end)) {
		throw new Error('Formatação de data inválido');
	}

	// Garante ordem cronológica para cálculo positivo
	let isNegative = false;
	if (start > end) {
		[start, end] = [end, start];
		isNegative = true;
	}

	// Extrai componentes em UTC para evitar bugs de fuso horário local
	let years = end.getUTCFullYear() - start.getUTCFullYear();
	let months = end.getUTCMonth() - start.getUTCMonth();
	let days = end.getUTCDate() - start.getUTCDate();
	let hours = end.getUTCHours() - start.getUTCHours();
	let minutes = end.getUTCMinutes() - start.getUTCMinutes();
	let seconds = end.getUTCSeconds() - start.getUTCSeconds();
	let milliseconds = end.getUTCMilliseconds() - start.getUTCMilliseconds();

	// Ajusta milissegundos
	if (milliseconds < 0) {
		milliseconds += 1000;
		seconds--;
	}

	// Ajusta segundos
	if (seconds < 0) {
		seconds += 60;
		minutes--;
	}

	// Ajusta minutos
	if (minutes < 0) {
		minutes += 60;
		hours--;
	}

	// Ajusta horas
	if (hours < 0) {
		hours += 24;
		days--;
	}

	// Ajusta dias considerando o tamanho real do més anterior
	if (days < 0) {
		const yearForPreviousMonth =
			end.getUTCMonth() === 0
				? end.getUTCFullYear() - 1
				: end.getUTCFullYear();
		const previousMonth =
			end.getUTCMonth() === 0 ? 11 : end.getUTCMonth() - 1;
		const daysInPreviousMonth = new Date(
			Date.UTC(yearForPreviousMonth, previousMonth + 1, 0),
		).getUTCDate();

		days += daysInPreviousMonth;
		months--;
	}

	// Ajusta meses
	if (months < 0) {
		months += 12;
		years--;
	}

	const result = {
		years,
		months,
		days,
		hours,
		minutes,
		seconds,
		milliseconds,
	};

	if (isNegative) {
		Object.keys(result).forEach((key) => {
			result[key] = -result[key];
		});
	}

	return result;
};
