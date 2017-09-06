'use strict';

import { observable } from 'mobx';

/**
 * 账号信息
 */
class Account {

    @observable name = 'default name';
}

export default new Account();