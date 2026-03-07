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
			color,
			description
		}) => {
			const toolElement = document.createElement('details');
			toolElement.classList.add('item');
			toolElement.setAttribute('style', `--main-color: ${color};`);
			
			const summaryElement = document.createElement('summary');
			
			const contentContainer = document.createElement('div');
			contentContainer.classList.add('content-container');
			
			summaryElement.innerHTML = `
				<div class="title">
					<svg class="icon ${title.toLowerCase()}">
						<use xlink:href="${icon}" />
					</svg>
					<span class="text">${title}</span>
				</div>
				<div class="triangle"></div>
			`;
			
			contentContainer.innerHTML = `
				<p class="content">${description}</p>
			`;
			
			toolElement.appendChild(summaryElement);
			toolElement.appendChild(contentContainer);
			
			toolContainer.appendChild(toolElement);
		});
	} catch (error) {
		console.error(error);
	}
}