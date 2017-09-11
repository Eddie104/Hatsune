"use strict";

module.exports = require('mongoose').model('user', require('./db/userSchema'), "users");