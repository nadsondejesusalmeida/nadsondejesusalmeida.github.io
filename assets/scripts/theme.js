const themeColorButton = document.getElementById('theme-color-button');
const themeSystem = localStorage.getItem('themeSystem') || 'light';

function setThemeSystem(theme) {
	const lightThemeIcon = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px"><path fill="currentColor" d="M24 34q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425Z"/></svg>';
	const darkThemeIcon = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px"><path fill="currentColor" d="M38.6 24.05q0 4.25-1.525 7.9-1.525 3.65-4.2 6.325-2.675 2.675-6.225 4.2Q23.1 44 19.05 44q-1.85 0-3.775-.35-1.925-.35-3.525-.9-.45-.15-.7-.55-.25-.4-.25-.9 0-.25.1-.5t.3-.5q3.05-3.3 5.225-7t2.175-9.35q.05-5.6-2.125-9.275Q14.3 11 11.25 7.7q-.2-.25-.3-.5-.1-.25-.1-.5 0-.5.25-.9t.7-.55q1.6-.55 3.525-.9Q17.25 4 19.1 4q4.05 0 7.6 1.525t6.2 4.2q2.65 2.675 4.175 6.35T38.6 24.05Z"/></svg>';
	
	document.documentElement.setAttribute('data-theme', theme);
	
	if (theme === 'light') {
		themeColorButton.innerHTML = lightThemeIcon;
	} else {
		themeColorButton.innerHTML = darkThemeIcon;
	}
}

themeColorButton.addEventListener('click', (e) => {
	const oldTheme = localStorage.getItem('themeSystem') || 'light';
	const newTheme = oldTheme === 'light' ? 'dark' : 'light';
	
	localStorage.setItem('themeSystem', newTheme);
	setThemeSystem(newTheme);
});

setThemeSystem(themeSystem);