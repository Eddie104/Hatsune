'use strict';

import React, { PureComponent } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import AppNavigation from './navigation';

export default class App extends PureComponent {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AppNavigation ref={c => this._navigation = c} />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
