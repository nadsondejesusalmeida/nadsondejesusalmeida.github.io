const getThemeColorButton = () => {
	let themeColorButton = document.getElementById('theme-color-button');

	if (!themeColorButton) {
		themeColorButton = document.createElement('button');
		themeColorButton.id = 'theme-color-button';
		themeColorButton.classList.add('default');
		document.body.appendChild(themeColorButton);
	}

	return themeColorButton;
}

const getThemeMode = () => {
	const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	
	return isDarkMode ? 'dark' : 'light';
}

const themeSystem = localStorage.getItem('themeSystem') || getThemeMode();

const setThemeSystem = (theme) => {
	const lightThemeIcon = `
		<svg class="icon filled sunny">
			<use href="https://nadsondejesusalmeida.github.io/assets/icons/sprite.svg#sunny-icon-filled" />
		</svg>
	`;
	const darkThemeIcon = `
		<svg class="icon filled bedtime">
			<use href="https://nadsondejesusalmeida.github.io/assets/icons/sprite.svg#bedtime-icon-filled" />
		</svg>
	`;
	
	document.documentElement.setAttribute('data-theme', theme);
	
	if (theme === 'light') {
		getThemeColorButton().innerHTML = lightThemeIcon;
	} else {
		getThemeColorButton().innerHTML = darkThemeIcon;
	}
}

window.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', () => {
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

getThemeColorButton().addEventListener('click', () => {
	const oldTheme = localStorage.getItem('themeSystem') || getThemeMode();
	const newTheme = oldTheme === 'light' ? 'dark' : 'light';
	
	localStorage.setItem('themeSystem', newTheme);
	
	if (newTheme === getThemeMode()) {
		localStorage.removeItem('themeSystem');
	}
	
	setThemeSystem(newTheme);
});

setThemeSystem(themeSystem);