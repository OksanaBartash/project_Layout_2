$(function () {
	let swiper_1 = new Swiper(".linksSwiper", {
		spaceBetween: 5,
		loop: true,
		slidesPerView: 4,
		autoplay: {
			delay: 1000,
			stopOnLasrSlide: false,
			disableONintersction: true,
		},
		breakpoints: {
			320: {
				direction: "horizontal",
			},
			1200: {
				direction: "vertical",
			},
		},
	});

	let swiper_2 = new Swiper(".imageSwiper", {
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 3000,
			stopOnLasrSlide: false,
			disableONintersction: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			1023: {
				slidesPerView: 3
			},
			1440: {
				slidesPerView: 4,
				spaceBetween: 10
			}
		}
	});

	let swiper_3 = new Swiper(".cardsSwiper", {
		direction: 'horizontal',
		loop: true,
		autoplay: {
			delay: 3000,
			stopOnLasrSlide: false,
			disableONintersction: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			850: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1370: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	});
});
