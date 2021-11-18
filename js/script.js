const iconMenu = document.querySelector('.icon-menu');

if (iconMenu) {
	const menu = document.querySelector('.menu');
	iconMenu.addEventListener('click', () => {
		iconMenu.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}

