'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import { observer, inject } from 'mobx-react/native';

@inject('account')
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
		return (
			<View style={styles.container}>
				<Text style={{ marginTop: 200}} onPress={() => {
					// goBack();
					navigate('test2', { isModal: true });
				}}>
					current name is { name }
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
