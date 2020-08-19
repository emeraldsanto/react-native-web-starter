import React from "react";
import { Text, View } from "react-native";
import { Route } from "../../models/enums/Route";
import { NavigationScreen } from "../../navigation/NavigationScreen";
import { DescriptionScreenStyle } from "./DescriptionScreenStyle";

const TECHNOLOGIES = [
	"ReactJS",
	"React Native",
	"React Native Web",
	"React Navigation",
	"TypeScript"
]

export const DescriptionScreen: NavigationScreen<Route.DESCRIPTION> = () => {
	return (
		<View style={DescriptionScreenStyle.container}>
			<Text>
				This application is built using the following technologies:
			</Text>

			<View style={DescriptionScreenStyle.list}>
				{TECHNOLOGIES.map(t => (
					<View style={DescriptionScreenStyle.point}>
						<View style={DescriptionScreenStyle.bullet} />

						<Text>
							{t}
						</Text>
					</View>
				))}
			</View>
		</View>
	);
}