'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import { observer, inject } from 'mobx-react/native';
import toast from '../utils/toast';
import * as talkingData from '../utils/talkingData';
import Egg from 'react-native-egg';
import * as WeChat from 'react-native-wechat';

@inject('account')
@inject('logArr')
@observer
export default class TestScene1 extends Component {
	
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: `test1`,
	});

	constructor(props) {
		super(props);
	}

	render() {
		const { navigate, goBack } = this.props.navigation;
		const { name } = this.props.account;
		const { logArr } = this.props;
		return (
			<View style={styles.container}>
				<Text style={{ marginTop: 200 }} onPress={() => {
					// this.props.account.name = '123';
					// goBack();
					navigate('test2', { isModal: true });
					
					logArr.push({
						level: global.ERROR,
						log: 'this is errorthis is errorthis is errorthis is errorthis is error'
					});

					// logArr.push({
					// 	level: global.ERROR,
					// 	log: 'this is errorthis is errorthis is errorthis is errorthis is error'
					// });
					// logArr.push({
					// 	level: global.WARN,
					// 	log: 'this is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warn'
					// });
					// logArr.push({
					// 	level: global.DEBUG,
					// 	log: 'this is debug'
					// });
					// logArr.push({
					// 	level: global.INFO,
					// 	log: 'info'
					// });
				}}>
					current name is { name }
				</Text>
				<Text style={{ }} onPress={() => {
					navigate('logScene');
				}}>
					go to logScene!
				</Text>
				<Egg
					setps={'TTT'}
					onCatch={() => {
						toast('catch!!');
					}}
				>
					<Text style={{}}>
						test egg!!
					</Text>
				</Egg>
				<Text style={{}} onPress={() => {
					// talkingData.onEvent('testEventID');
					talkingData.onLogin(talkingData.ACCOUNT_TYPE.QQ, '36', '32968210');
					toast('ok');
				}}>
					talkingData event
				</Text>
				<Text style={{}} onPress={() => {
					WeChat.isWXAppInstalled().then(resule => {
						toast(resule.toString());
					});
				}}>
					weChat
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
