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
		
		const userBox = document.createElement('div');
		const controlBox = document.createElement('div');
		
		userBox.classList.add('user-box');
		controlBox.classList.add('control-box');
		
		const iconBox = document.createElement('div');
		const detailsBox = document.createElement('div');
		
		iconBox.textContent = firstLetterOfTheName;
		iconBox.classList.add('icon-box');
		iconBox.style.backgroundColor = color;
		detailsBox.classList.add('details-box');
		
		const contactName = document.createElement('p');
		const contactEmail = document.createElement('p');
		
		contactName.textContent = name;
		contactName.classList.add('contact-name');
		
		contactEmail.textContent = email;
		contactEmail.classList.add('contact-email');
		
		detailsBox.appendChild(contactName);
		detailsBox.appendChild(contactEmail);
		
		userBox.appendChild(iconBox);
		userBox.appendChild(detailsBox)
		
		contactCard.appendChild(userBox);
		contactCard.appendChild(controlBox);
		
		local.appendChild(contactCard);
	});
}