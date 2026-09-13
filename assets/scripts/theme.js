const STORAGE_KEY = 'themeSystem';
const DEFAULT_THEME = 'light';
const URL_ICON = 'https://nadsondejesusalmeida.github.io/assets/icons';
const LIGHT_ICON = `
    <svg class="icon filled sunny">
        <use href="${URL_ICON}/sprite.svg#sunny-icon-filled" />
    </svg>
`;
const DARK_ICON = `
    <svg class="icon filled bedtime">
        <use href="${URL_ICON}/sprite.svg#bedtime-icon-filled" />
    </svg>
`;

const getSystemTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getStoredTheme = () => localStorage.getItem(STORAGE_KEY);

// Gerencia o estado do tema
const applyTheme = (theme, buttonElement, lightIcon, darkIcon) => {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Só mexe no botão se ele realmente foi passado para a função
    if (buttonElement) {
        buttonElement.innerHTML = theme === DEFAULT_THEME ? lightIcon : darkIcon;
    }
};

const themeButton = document.getElementById('theme-color-button');

// Helper para não repetir os parâmetros toda vez
const updateUI = (theme) => applyTheme(theme, themeButton, LIGHT_ICON, DARK_ICON);

const currentTheme = getStoredTheme() || getSystemTheme();
updateUI(currentTheme);

// Clique no botão
if (themeButton) {
    themeButton.addEventListener('click', () => {
        const oldTheme = getStoredTheme() || getSystemTheme();
        const newTheme = oldTheme === DEFAULT_THEME ? 'dark' : 'light';
        
        if (newTheme === getSystemTheme()) {
            localStorage.removeItem(STORAGE_KEY);
        } else {
            localStorage.setItem(STORAGE_KEY, newTheme);
        }
        
        updateUI(newTheme);
    });
}

// Mudança no sistema operacional
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const newSystemTheme = getSystemTheme();
    
    if (getStoredTheme() === newSystemTheme) {
        localStorage.removeItem(DEFAULT_THEME);
    }
    
    if (!getStoredTheme()) {
        updateUI(newSystemTheme);
    }
});
