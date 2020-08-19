import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { Route } from "../../models/enums/Route";
import { NavigationScreen } from "../../navigation/NavigationScreen";
import { IntroductionScreenStyle } from "./IntroductionScreenStyle";

export const IntroductionScreen: NavigationScreen<Route.INTRODUCTION> = props => {
	const { navigation } = props;

	function onButtonPress() {
		navigation.navigate(Route.DESCRIPTION);
	}

	return (
		<View style={IntroductionScreenStyle.container}>
			<Text>
				This is a cross platform application! It is now running on
				
				<Text style={IntroductionScreenStyle.bold}>
					{" " + Platform.OS.toUpperCase()}.
				</Text>
			</Text>

			<TouchableOpacity
				activeOpacity={0.6}
				onPress={onButtonPress}
				style={IntroductionScreenStyle.button}
			>
				<Text style={IntroductionScreenStyle.buttonText}>
					Go to another screen!
				</Text>
			</TouchableOpacity>
		</View>
	);
}