import { App } from "./src/App";
import { AppRegistry } from "react-native";
import { name as appName } from "./src/app.json";
import { enableScreens } from "react-native-screens";

enableScreens();

AppRegistry.registerComponent(appName, () => App);