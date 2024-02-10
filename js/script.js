const wrapper = document.querySelector('.wrapper');
const topNav = document.querySelector('.top__nav');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
function tN() {
	const windowWidth = window.innerWidth;
	if (windowWidth <= 1024) {
		topNav.classList.add('add')
		burgerMenu.classList.remove('die')
		wrapper.classList.remove('display__none')
		burgerf();
		console.log('add add')
	} else {
		topNav.classList.remove('add')
		burgerf();
		console.log('remove add')
	}
}
tN();
function burgerf() {
	if (topNav.classList.contains('add')) {
		burger.classList.add('der')
		console.log('add der')
	} else {
		burger.classList.remove('der')
		console.log('remove der ')
	}
}
function burgerMenuf(event) {
	if (event.target.closest('.burger__li')) {
		burgerMenu.classList.toggle('die')
		burgerMenu.classList.toggle('active')
		burgerMenu.classList.add('shadow')
		wrapper.classList.toggle('display__none')
		console.log('toggle die')
	} else if (!burger.classList.contains('der')) {
		burgerMenu.classList.remove('die');
		burgerMenu.classList.remove('shadow')
		burgerMenu.classList.remove('active');
	}
}
document.addEventListener('click', burgerMenuf);
window.addEventListener('resize', tN);
window.addEventListener('resize', burgerMenuf);
tN(); 
// my