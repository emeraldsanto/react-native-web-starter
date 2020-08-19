import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FC } from "react";
import { Route } from "../models/enums/Route";

/**
 * Interface mapping screen names to their navigation params.
 */
export interface ScreenArguments extends Record<string, object | undefined> {
	[Route.INTRODUCTION]: undefined,
	[Route.DESCRIPTION]: undefined
}

/**
 * Interface representing the props passed in to every screen by React Navigation.
 */
export interface NavigationScreenProps<TName extends keyof ScreenArguments> {
	navigation: StackNavigationProp<ScreenArguments, TName>;
	route: RouteProp<ScreenArguments, TName>;
}

/*
 * Shorthand type for function components, should be used instead of `React.FC` to
 * ensure screens and their parameters are properly typed.
 */
export type NavigationScreen<TName extends keyof ScreenArguments> = FC<NavigationScreenProps<TName>>;