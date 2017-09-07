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
import * as update from './utils/update';
import toast from './utils/toast';

export default class Root extends PureComponent {
	
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		update.start((err) => {
			if (err) {
				toast(err);
			}
		});
	}

	render() {
		console.log(stores);
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
