export const applyTheme = (theme, buttonElement, lightIcon, darkIcon) => {
	document.documentElement.setAttribute('data-theme', theme);

	// Só mexe no botão se ele realmente foi passado para a função
	if (buttonElement) {
		buttonElement.innerHTML = theme === 'light' ? lightIcon : darkIcon;
	}
};