
if (ScrollTrigger.isTouch !== 1) {




	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 2,
		effects: true
	})

	//blur
	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: '0',
			end: '1800',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -300 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-1050',
				end: '-300',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

	let itemsA = gsap.utils.toArray('.advantage .advantage-content ')

	itemsA.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: 200}, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-1000',
				end: '-560',
				scrub: true
			}
		})
	})
	let itemsAT = gsap.utils.toArray('.advantage .advantage-title ')

	itemsAT.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: 300}, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-1000',
				end: '-560',
				scrub: true
			}
		})
	})
	
}


function changepos(){
	var relative_wind = window.innerWidth / window.innerHeight;
	var relative_img = 2997 / 1687;
	var images = document.getElementsByClassName('hero');
	if (relative_img > relative_wind){
		for(let i = 0; i < images.length; i++ ){
			images[i].style.width = 'auto';
			images[i].style.height = '100vh';
			images[i].style.right = `${(window.innerWidth - images[i].width ) / 2}px`
		}
	}
	if (relative_img < relative_wind){
		for(let i = 0; i < images.length; i++ ){
			images[i].style.width = '100vw';
			images[i].style.height = 'auto';
		
		}
	}	
}
changepos();
window.addEventListener("resize", function(event) {
	changepos();
})

// window.onload = function() {
// 	var width = window.innerWidth;
// 	var height = window.innerHeight;

// 	var images = document.getElementsByClassName('hero');

// 	for(let i = 0; i < images.length; i++ )
// 	// Сравниваем размеры и устанавливаем соответствующий размер изображения
// 	if (width > height) {
// 		// Ширина экрана больше высоты, заполняем по ширине
// 		images[i].style.width = 'auto';
// 		images[i].style.height = '100vh';
// 	} else {
// 		// Высота экрана больше ширины, заполняем по высоте
// 		images[i].style.height = 'auto';
// 		images[i].style.width = '100vw';
// 	}
// };
