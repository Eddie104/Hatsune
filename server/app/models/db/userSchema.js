"use strict";

/**
 * 账号数据表
 */
const mongoose      = require('mongoose');
const autoIncrement = require('./db');

const userSchema = new mongoose.Schema({
	account: {type: String, required: true, index: true},
	password: {type: String, required: true},
	// 生日
	birthday: {type: Date, require: true},
	// 创建时间
	registerDate: {type: Date, required: true},
	// 手机号
	phone: {type: String, default: ''},
	// 用户来源，是qq的还是微信的
	source: {type: String, default: "tomato"}
}, {collection: "users"});

/**
 * 配置自增长的字段
 */
userSchema.plugin(autoIncrement.plugin, {
	// model名
	model: 'user',
	// 自增长字段名
	field: 'id',
	// 起始数值
	startAt: 1000,
	// 自增值
	incrementBy: 1
});

module.exports = userSchema;