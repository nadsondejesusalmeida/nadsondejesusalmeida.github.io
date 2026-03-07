const fetchProjectData = async () => {
	const response = await fetch('/assets/data/project-data.json');
	
	if (!response.ok) {
		const error = new Error('Não foi possível buscar os dados dos projetos');
		error.code = 'NOT_FOUND';
		throw error;
	}
	
	const data = response.json();
	return data;
}

export const renderProjectCards = async () => {
	try {
		const listOfProjects = await fetchProjectData();
		const projectContainer = document.querySelector('#project-container');
		
		listOfProjects.forEach(({
			title,
			href,
			period,
			description,
			learnMore,
			color,
			images
		}) => {
			const { avif, webp, jpg } = images;
			
			const projectElement = document.createElement('div');
			projectElement.classList.add('project');
			projectElement.setAttribute('style', `--project-color: ${color};`);
			
			const linkElement = document.createElement('a');
			linkElement.href = href;
			linkElement.target = '_blank';
			
			const imageElement = document.createElement('picture');
			imageElement.innerHTML = `
				<source srcset="${avif.src} type="${avif.type}" />
				<source srcset="${webp.src} type="${webp.type}" />
				<img src="${jpg.src}" alt="Imagem do ${title}" width="450" class="photo" />
			`;
			
			const projectInformationElement = document.createElement('div');
			projectInformationElement.classList.add('project-information');
			projectInformationElement.innerHTML = `
				<p class="period">${period}</p>
				<h3 class="project-title">${title}</h3>
				<p>${description}</p>
				<details>
					<summary>Saiba mais</summary>
					<p>${learnMore}</p>
				</details>
			`;
			
			linkElement.appendChild(imageElement);
			
			projectElement.appendChild(linkElement);
			projectElement.appendChild(projectInformationElement);
			
			projectContainer.appendChild(projectElement);
		});
	} catch (error) {
		console.error(error);
	}
}