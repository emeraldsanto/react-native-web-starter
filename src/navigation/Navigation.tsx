import { NavigationContainer, NavigationContainerProps } from "@react-navigation/native";
import React, { FC } from "react";
import { MainStackNavigator } from "./navigators/MainStackNavigator";

export const Navigation: FC<Omit<NavigationContainerProps, "children">> = props => {
	return (
		<NavigationContainer {...props}>
			<MainStackNavigator />
		</NavigationContainer>
	);
}