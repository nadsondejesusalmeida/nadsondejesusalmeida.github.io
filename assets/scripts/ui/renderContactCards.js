export const renderContactCards = (contacts, local, message) => {
	message = message ? message : 'Clique em sincronizar para baixar seus contatos.';
	local.innerHTML = '';
	
	if (contacts.length === 0) {
		local.textContent = message;
		return;
	}
	
	contacts.forEach(contact => {
		const { name, email, id, color } = contact;
		const firstLetterOfTheName = name.charAt(0);
		
		const contactCard = document.createElement('div');
		contactCard.classList.add('contact-card');
		contactCard.dataset.id = id;
		
		const userContainer = document.createElement('div');
		const controlContainer = document.createElement('div');
		
		userContainer.classList.add('user-container');
		controlContainer.classList.add('control-container');
		
		const iconContainer = document.createElement('div');
		const detailsContainer = document.createElement('div');
		
		iconContainer.textContent = firstLetterOfTheName;
		iconContainer.classList.add('icon-container');
		iconContainer.style.backgroundColor = color;
		detailsContainer.classList.add('details-container');
		
		const contactName = document.createElement('p');
		const contactEmail = document.createElement('p');
		
		contactName.textContent = name;
		contactName.classList.add('contact-name');
		
		contactEmail.textContent = email;
		contactEmail.classList.add('contact-email');
		
		detailsContainer.appendChild(contactName);
		detailsContainer.appendChild(contactEmail);
		
		userContainer.appendChild(iconContainer);
		userContainer.appendChild(detailsContainer)
		
		contactCard.appendChild(userContainer);
		contactCard.appendChild(controlContainer);
		
		local.appendChild(contactCard);
	});
}