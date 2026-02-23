const themeColorButton = document.getElementById('theme-color-button');

const getThemeMode = () => {
	const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	
	return isDarkMode ? 'dark' : 'light';
}

const themeSystem = localStorage.getItem('themeSystem') || getThemeMode();

const setThemeSystem = (theme) => {
	const lightThemeIcon = `
		<svg class="icon filled sunny">
			<use xlink:href="/assets/icons/sprite.svg#sunny-icon-filled" />
		</svg>
	`;
	const darkThemeIcon = `
		<svg class="icon filled bedtime">
			<use xlink:href="/assets/icons/sprite.svg#bedtime-icon-filled" />
		</svg>
	`;
	
	document.documentElement.setAttribute('data-theme', theme);
	
	if (theme === 'light') {
		themeColorButton.innerHTML = lightThemeIcon;
	} else {
		themeColorButton.innerHTML = darkThemeIcon;
	}
}

window.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', event => {
		const newTheme = getThemeMode();
		
		if (localStorage.getItem('themeSystem') === newTheme) {
			localStorage.removeItem('themeSystem');
			setThemeSystem(newTheme);
			return;
		}
		
		if (!localStorage.getItem('themeSystem')) {
			setThemeSystem(newTheme);
		}
});

themeColorButton.addEventListener('click', () => {
	const oldTheme = localStorage.getItem('themeSystem') || getThemeMode();
	const newTheme = oldTheme === 'light' ? 'dark' : 'light';
	
	localStorage.setItem('themeSystem', newTheme);
	
	if (newTheme === getThemeMode()) {
		localStorage.removeItem('themeSystem');
	}
	
	setThemeSystem(newTheme);
});

setThemeSystem(themeSystem);