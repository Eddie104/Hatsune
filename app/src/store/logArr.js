'use strict';

import { observable } from 'mobx';

global.ERROR = Symbol('error');

global.WARN = Symbol('warn');

global.DEBUG = Symbol('debug');

global.INFO = Symbol('info');

/**
 * log
 */
class LogArr {

	// {level, log}
	@observable logArr = [];
}

export default new LogArr();