const fetchSkillsData = async () => {
	const response = await fetch('/assets/data/skills-data.json');
	
	if (!response.ok) {
		const error = new Error('Não foi possível buscar os dados das habilidades.');
		error.code = 'NOT_FOUND';
		throw error;
	}
	
	const data = response.json();
	return data;
}

export const renderSkillCards = async () => {
	try {
		const listOfSkills = await fetchSkillsData();
		const skillContainer = document.querySelector('#skill-container');
		
		listOfSkills.forEach(({ title, icon, color }) => {
			const skillElement = document.createElement('div');
			skillElement.classList.add('item');
			skillElement.setAttribute('style', `--main-color: ${color}`);
			
			const skillInformationElement = document.createElement('div');
			skillInformationElement.classList.add('info');
			skillInformationElement.innerHTML = `
				<span class="skill-name">
					<svg class="icon ${title.toLowerCase()}">
						<use xlink:href="${icon}" />
					</svg>
					<span class="text">${title}</span>
				</span>
			`;
			
			skillElement.appendChild(skillInformationElement);
			skillContainer.appendChild(skillElement);
		});
	} catch (error) {
		console.error(error);
	}
}