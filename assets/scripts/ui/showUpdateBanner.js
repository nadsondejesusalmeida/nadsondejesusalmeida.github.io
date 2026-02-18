export const showUpdateBanner = (registration) => {
	const banner = document.createElement('div');
	banner.classList.add('update-banner');
	banner.innerHTML = `
		<p>Nova versão disponível!</p>
		<button id="update-confirm">Atualizar</button>
	`;
	
	document.body.appendChild(banner);
	document.getElementById('update-confirm').addEventListener('click', () => {
		// Avisar o Service Worker para pular a espera
		if (registration.waiting) {
			registration.waiting.postMessage({ type: 'SKIP_WAITING' });
		}
		
		window.location.reload();
	});
}