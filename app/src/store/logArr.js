'use strict';

import { observable, action } from 'mobx';

global.ERROR = Symbol('error');

global.WARN = Symbol('warn');

global.DEBUG = Symbol('debug');

global.INFO = Symbol('info');

/**
 * log
 */
class LogArr {

	// {level, log}
	@observable arr = [];

	@action
	push(log) {
		this.arr.push(log);
	}

	@action
	clear() {
		this.arr.replace([]);
	}

}

export default new LogArr();