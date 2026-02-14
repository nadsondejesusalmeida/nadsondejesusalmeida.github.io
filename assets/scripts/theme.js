const themeColorButton = document.getElementById('theme-color-button');
const themeSystem = localStorage.getItem('themeSystem') || 'light';

function setThemeSystem(theme) {
	const lightThemeIcon = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px"><path fill="currentColor" d="M24 34q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425Z"/></svg>';
	const darkThemeIcon = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px"><path fill="currentColor" d="M39.3 36.85Q36.45 40 32.4 42q-4.05 2-8.4 2-4.2 0-7.85-1.55Q12.5 40.9 9.8 38.2q-2.7-2.7-4.25-6.35Q4 28.2 4 24q0-7.2 4.725-12.825Q13.45 5.55 20.5 4.3q1.3-.25 1.9.575.6.825.15 2.175-1.35 4.25-.9 8.65.45 4.4 2.5 8.15t5.575 6.475Q33.25 33.05 38 33.9q1.4.25 1.775 1.1.375.85-.475 1.85Z"/></svg>';
	
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