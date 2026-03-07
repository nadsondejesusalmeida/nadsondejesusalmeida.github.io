import {
	renderProjectCards,
	renderSkillCards,
	renderToolCards
} from '/assets/scripts/index.js';

const navLinks = document.querySelectorAll('#navigation-bar ul li a.link');

navLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		const targetLink = event.currentTarget;
		const target = document.querySelector(targetLink.getAttribute('href'));
		
		if (target) {
			const headerHeight = document.querySelector('header').offsetHeight;
			const targetPosition = target.offsetTop - headerHeight - 20;
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
	});
});

renderSkillCards();
renderProjectCards();
renderToolCards();