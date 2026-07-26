const fetchToolData = async () => {
	const response = await fetch('/assets/data/tool-data.json');
	
	if (!response.ok) {
		const error = new Error('Não foi possível buscar os dados das ferramentas!');
		error.code = 'NOT_FOUND';
		throw error;
	}
	
	const data = response.json();
	return data;
}

export const renderToolCards = async () => {
	try {
		const listOfTools = await fetchToolData();
		const toolContainer = document.querySelector('#tool-container');
		
		listOfTools.forEach(({
			title,
			icon,
			color
		}) => {
			const toolElement = document.createElement('div');
			toolElement.classList.add('item');
			toolElement.setAttribute('style', `--main-color: ${color};`);
			
			const summaryElement = document.createElement('div');
			summaryElement.classList.add('title');
			
			summaryElement.innerHTML = `
				<svg class="icon ${title.toLowerCase()}">
					<use xlink:href="${icon}" />
				</svg>
				<span class="text">${title}</span>
			`;
			
			toolElement.appendChild(summaryElement);
			toolContainer.appendChild(toolElement);
		});
	} catch (error) {
		console.error(error);
	}
}