const themeColorButton = document.getElementById('theme-color-button');
const themeSystem = localStorage.getItem('themeSystem') || 'light';

function setThemeSystem(theme) {
	const lightThemeIcon = `<ion-icon name="sunny" id="theme-color-icon"></ion-icon>`;
	const darkThemeIcon = `<ion-icon name="moon" id="theme-color-icon"></ion-icon>`;
	
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