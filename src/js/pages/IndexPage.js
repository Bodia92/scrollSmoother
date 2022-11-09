import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';

import anim from '../components/anim';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		const Anim = new anim();
	}

	init() {
		this.loadFunc();
	}
}
