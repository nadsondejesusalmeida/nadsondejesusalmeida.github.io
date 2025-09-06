const bodyEl = document.querySelector('body');
const botaoTema = document.getElementById('botao-tema');
const temaSalvo = localStorage.getItem('tema');

function temaEscuro(tipo) {
	if (tipo) {
		bodyEl.classList.add('escuro');
		botaoTema.innerHTML = `<i class="fa-solid fa-sun"></i>`;
	} else {
		bodyEl.classList.remove('escuro');
		botaoTema.innerHTML = `<i class="fa-solid fa-moon"></i>`;
	}
}

temaEscuro(temaSalvo === 'escuro');

botaoTema.addEventListener('click', () => {
	const isEscuro = bodyEl.classList.toggle('escuro');
	temaEscuro(isEscuro);
	localStorage.setItem('tema', isEscuro ? 'escuro' : 'claro');
});