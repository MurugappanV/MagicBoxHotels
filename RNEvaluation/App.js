/**
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { Navigator, Store } from "./src";
import { Platform, StyleSheet, Text, View } from "react-native";
import { GlobalProps } from "./src";
import SplashScreen from "react-native-splash-screen";

type Props = {};
export default class App extends Component<Props> {
	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<Provider store={Store}>
				<Navigator />
			</Provider>
		);
	}
}
