
if (ScrollTrigger.isTouch !== 1) {
	


	ScrollSmoother.create({
		wrapper: '.library',
		content: '.',
		smooth: 2,
		effects: true
	})



	let items = gsap.utils.toArray('.wrapper .content')

	items.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: 100 }, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-1050',
				end: '-300',
				scrub: true
			}
		})
	})


	
}

