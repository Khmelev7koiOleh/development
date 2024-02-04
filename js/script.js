const topNav = document.querySelector('.top__nav');
const remove = () => {
	topNav.innerHTML = ""
 };

 // Додаємо обробник подій для події прокрутки
 window.addEventListener('scroll', () => {
	// Координата, при якій ми хочемо викликати функцію
	const targetCoordinate = 850;

	// Перевіряємо, чи вже прокручено на достатню відстань
	if (window.pageYOffset >= targetCoordinate) {
	  // Викликаємо функцію, якщо умова виконана
	  remove();
	}
 });
 window.addEventListener('scroll', () => {
	// Координата, при якій ми хочемо викликати функцію
	const targetCoordinate = 849;

	// Перевіряємо, чи вже прокручено на достатню відстань
	if (window.pageYOffset >= targetCoordinate) {
	  // Викликаємо функцію, якщо умова виконана
	  add();
	}
 });

/*const topNav = document.querySelector('.top__nav');
if(){
	topNav.innerHTML = "";
}
$('.main').bind('mousewheel', function(e){
	if(e.wheelDelta< 0) {
		 //scroll down
		 console.log('Down');
	}else {
		 //scroll up
		 console.log('Up');
	}

	//prevent page fom scrolling
	return false;
});*/