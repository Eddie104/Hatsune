'use strict';

import React, { PureComponent } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import { observer, inject } from 'mobx-react/native';

@inject('account')
export default class TestScene2 extends PureComponent {
	
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: ``,
	});

	constructor(props) {
		super(props);
	}

	render() {
		const { navigate, goBack } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text style={{ marginTop: 200 }} onPress={() => {
					this.props.account.name = 'Eddie'; 
					goBack();
				}}>
					this is TestScene2
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
