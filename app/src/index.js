'use strict';

import React, { PureComponent } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import { Provider } from 'mobx-react/native';
import stores from './store';
import App from './app';

export default class Root extends PureComponent {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider { ...stores }>
				<App />
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
