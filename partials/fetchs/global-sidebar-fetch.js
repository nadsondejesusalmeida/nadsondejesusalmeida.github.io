const body = document.body;

const websiteURL = 'https://nadsondejesusalmeida.github.io/';
const openGlobalSidebarButtonURL = `${websiteURL}partials/buttons/open-global-sidebar-button.html'`
const globalSidebarOverlayURL = `${websiteURL}partials/overlays/global-sidebar-overlay.html`;

fetch(openGlobalSidebarButtonURL)
	.then(response => response.text())
	.then(data => {
		let header;
		if (!document.querySelector('header')) {
			header = document.createElement('header');
			
			if (body.firstChild) {
				body.insertBefore(header, document.body.firstChild);
			} else {
				body.appendChild(header);
			}
		} else {
			header = document.querySelector('header');
		}
		
		const tempElement = document.createElement('div');
		tempElement.innerHTML = data;
		
		while (tempElement.firstChild) {
			if (header.children.length > 0) {
				header.insertBefore(tempElement.firstChild, header.firstChild);
			} else {
				header.appendChild(tempElement.firstChild)
			}
		}
	});

fetch(globalSidebarOverlayURL)
	.then(response => response.text())
	.then(data => {
		const tempElement = document.createElement('div');
		tempElement.innerHTML = data;
		
		while (tempElement.firstChild) {
			body.appendChild(tempElement.firstChild);
		}
	});