import React from "react";
import { View } from "react-native";
import { Route } from "../../models/enums/Route";
import { NavigationScreen } from "../../navigation/NavigationScreen";
import { DescriptionScreenStyle } from "./DescriptionScreenStyle";

export const DescriptionScreen: NavigationScreen<Route.DESCRIPTION> = () => {
	return (
		<View style={DescriptionScreenStyle.container}>

		</View>
	);
}