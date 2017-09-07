'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import { observer, inject } from 'mobx-react/native';
import toast from '../utils/toast';

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
		const { logArr } = this.props.logArr;
		return (
			<View style={styles.container}>
				<Text style={{ marginTop: 200 }} onPress={() => {
					// this.props.account.name = '123';
					// goBack();
					// navigate('test2', { isModal: true });
					
					logArr.push({
						level: global.ERROR,
						log: 'this is errorthis is errorthis is errorthis is errorthis is error'
					});
					logArr.push({
						level: global.WARN,
						log: 'this is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warnthis is warn'
					});
					logArr.push({
						level: global.DEBUG,
						log: 'this is debug'
					});
					logArr.push({
						level: global.INFO,
						log: 'info'
					});
				}}>
					current name is { name }
				</Text>
				<Text style={{ }} onPress={() => {
					navigate('logScene');
				}}>
					go to logScene!
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
