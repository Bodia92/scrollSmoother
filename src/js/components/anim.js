import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import { getWindowSize } from '../../utils';
// import { GLOBAL_VARS } from '../../utils/constants';

class anim {
	heroAnim() {
		const $hero = document.querySelector('.hero');

		const $heroTitle = $hero.querySelector('.hero__title');
		const $heroDecor = $hero.querySelector('.hero__bg');
		const $heroText = $hero.querySelector('.hero__text');

		const contentTl = gsap.timeline({
			delay: 0.4,
		});

		const heroTl = gsap.timeline();

		gsap.set($heroTitle, {
			opacity: 0,
			y: -100,
			filter: 'blur(2px)',
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
				duration: 0.9,
				delay: 0.4,
				y: 0,
				filter: 'blur(0px)',
				// stagger: 0.5,
				ease: 'power3.out',
			}, 'start')
			.to($heroText, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay: 0.6,
				// stagger: 0.6,
				ease: 'power3.out',
			}, 'start')
			.to($heroDecor, {
				opacity: 1,
				duration: 0.8,
				delay: 0.8,
				// stagger: 0.8,
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
