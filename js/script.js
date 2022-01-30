const iconMenu = document.querySelector('.icon-menu');
const body = document.querySelector('.root');

if (iconMenu) {
	const menu = document.querySelector('.menu');
	iconMenu.addEventListener('click', () => {
		iconMenu.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle("stop");
	});
}

