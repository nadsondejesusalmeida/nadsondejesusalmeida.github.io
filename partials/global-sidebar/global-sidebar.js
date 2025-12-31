const globalSidebar = document.querySelector('#global-sidebar');
const globalCategoryContainer = document.querySelectorAll('.global-category-container');
const globalCategoryIconContainer = document.querySelectorAll('.global-category-icon-container');

function openGlobalSidebar() {
	globalSidebar.classList.add('show');
	globalSidebar.removeAttribute('inert');
}

function closeGlobalSidebar() {
	globalSidebar.classList.remove('show');
	globalSidebar.setAttribute('inert', '');
}

for (let i = 0; i < globalCategoryContainer.length; i++) {
	globalCategoryContainer[i].addEventListener('click', () => {
		globalCategoryContainer[i].classList.toggle('show-sub-menu');
		
		if (globalCategoryContainer[i].id === 'global-category-projects') {
			const openFolderIcon = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><path fill="currentColor" d="M7 40q-1.15 0-2.075-.925Q4 38.15 4 37V11q0-1.15.925-2.075Q5.85 8 7 8h12.8q.6 0 1.175.25.575.25.975.65l2.1 2.1H41q1.15 0 2.075.925Q44 12.85 44 14H10q-1.25 0-2.125.875T7 17v20l4.5-17.75q.25-1 1.1-1.625.85-.625 1.85-.625H43.1q1.45 0 2.4 1.15t.55 2.6l-4.4 16.95q-.3 1.2-1.1 1.75T38.5 40Z"/></svg>';
			const closeFolderIcon = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><path fill="currentColor" d="M7.05 40q-1.2 0-2.1-.925-.9-.925-.9-2.075V11q0-1.15.9-2.075Q5.85 8 7.05 8H19.8q.6 0 1.175.25.575.25.975.65l2.1 2.1h17q1.15 0 2.075.925.925.925.925 2.075v23q0 1.15-.925 2.075Q42.2 40 41.05 40Z"/></svg>';
			
			globalCategoryIconContainer[i].innerHTML = globalCategoryContainer[i].classList.contains('show-sub-menu') ? openFolderIcon : closeFolderIcon;
		}
	})
}