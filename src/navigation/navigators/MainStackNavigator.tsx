import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { Route } from "../../models/enums/Route";
import { DescriptionScreen } from "../../screens/Description/DescriptionScreen";
import { IntroductionScreen } from "../../screens/Introduction/IntroductionScreen";

const MainStack = createStackNavigator();
export const MainStackNavigator: FC = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen name={Route.INTRODUCTION} component={IntroductionScreen} />
			<MainStack.Screen name={Route.DESCRIPTION} component={DescriptionScreen} />
		</MainStack.Navigator>
	);
}