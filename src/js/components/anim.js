import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import ScrollSmoother from 'gsap/ScrollSmoother';
// import { getWindowSize } from '../../utils';
// import { GLOBAL_VARS } from '../../utils/constants';

class anim {
	heroAnim() {
		const $hero = document.querySelector('.hero');

		const $heroTitle = $hero.querySelector('.hero_title');
		const $heroTitleStrong = $hero.querySelector('.hero_title__strong');
		const $heroDecor = $hero.querySelector('.hero__bg');
		const $heroText = $hero.querySelector('.hero__text');

		const contentTl = gsap.timeline({
			delay: 0.4,
		});

		const heroTl = gsap.timeline();

		gsap.set($heroTitle, {
			opacity: 0,
			x: 100,
		});

		gsap.set($heroTitleStrong, {
			opacity: 0,
		});

		gsap.set($heroText, {
			y: 100,
			opacity: 0,
		});

		gsap.set($heroDecor, {
			opacity: 0,
			y: 25,
			scale: 0.5,
		});

		contentTl
			.addLabel('start')
			.to($heroTitle, {
				opacity: 1,
				duration: 1,
				delay: 0.2,
				ease: 'power4.out',
			}, 'start')
			.to($heroTitle, {
				duration: 0.6,
				delay: 0.6,
				x: 0,
				ease: 'power3.out',
			}, 'start')
			.to($heroTitleStrong, {
				opacity: 1,
				duration: 1,
				delay: 1,
				ease: 'power3.out',
			}, 'start')
			.to($heroText, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay: 0.8,
				ease: 'power3.out',
			}, 'start')
			.to($heroDecor, {
				opacity: 1,
				duration: 0.8,
				delay: 1,
				scale: 1,
				y: 0,
				ease: 'power3.out',
			}, 'start');

		ScrollTrigger.create({
			trigger: $hero,
			start: 'center bottom',
			onEnter: contentTl,
		});
	}

	constructor() {
		this.init();
	}

	init() {
		// if (getWindowSize().windowWidth < GLOBAL_VARS.mediaPoint1) return;

		gsap.registerPlugin(ScrollTrigger);

		this.heroAnim();
	}
}

export default anim;
