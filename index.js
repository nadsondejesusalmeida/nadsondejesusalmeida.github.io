import {
	renderProjectCards,
	renderSkillCards,
	renderToolCards
} from '/assets/scripts/index.js';

const navLinks = document.querySelectorAll('#navigation-bar ul li a.link');

const skillsContainer = document.querySelector('#skill-container');
const toolContainer = document.querySelector('#tool-container');
const projectContainer = document.querySelector('#project-container');

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
renderToolCards();
renderProjectCards();