window.addEventListener('scroll', function(){
	const header = document.querySelector('.header-main');
	header.classList.toggle('sticky', window.scrollY > 0);
})


const burger = document.querySelector('.buger__menu_buttom');
const close = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});






const btnTeam  = document.querySelectorAll('.content-OurTeam-item-bloc-btn');
const contentTeam = document.querySelectorAll('.box-list');


for (const tab of btnTeam) {
	tab.addEventListener('click', () => {
		btnTeam.forEach(item => {
			if (tab === item) {
				item.classList.add('item-bloc-btn-active');
			} else {
				item.classList.remove('item-bloc-btn-active');
			}
		})

		if (item) {
			item.classList.remove('hidden');
		} else {
			item.classList.add('hidden');
		}
	});
}
