const getToastContainer = () => {
	let container = document.querySelector('toast-container');
	
	if (!container) {
		container = document.createElement('div');
		container.classList.add('toast-container');
		document.body.appendChild(container);
	}
	
	return container;
}

export const showToast = (message, type = 'default') => {
	const container = getToastContainer();
	const toast = document.createElement('div');
	toast.classList.add('toast');
	
	if (type !== 'default') toast.classList.add(type);
	toast.textContent = message;
	
	container.appendChild(toast);
	
	toast.addEventListener('animationend', (event) => {
		if (event.animationName === 'fade-out') {
			toast.remove();
			
			if (container.childNodes.length === 0) container.remove();
		}
	});
}