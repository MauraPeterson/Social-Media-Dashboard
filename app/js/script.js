const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const preferredColorSchemeDark = window.matchMedia("(prefers-color-scheme: dark)");

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('colorMode', 'dark');
    darkButton.click();
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
    lightButton.click();
}

const setColorMode = () => {
    if (localStorage.getItem('colorMode') == 'dark') {
        setDarkMode();
    } else if (localStorage.getItem('colorMode') == 'light') {
        setLightMode();
    } else if (window.matchMedia && preferredColorSchemeDark.matches) {
        setDarkMode();
    } else{
        setLightMode();
    }
}
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', event => {
        if (lightButton.checked) {
            setLightMode();
        } else {
            setDarkMode();
        }
    });
}

setColorMode();

preferredColorSchemeDark.addEventListener("change", e => e.matches && setDarkMode());
preferredColorSchemeDark.addEventListener("change", e => !e.matches && setLightMode());

