const navLinks = document.querySelectorAll('#navigation-bar ul li a.link');

navLinks.forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		
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