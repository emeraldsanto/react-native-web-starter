import { App } from "./src/App";
import { AppRegistry } from "react-native";
import { name as appName } from "./src/app.json";

AppRegistry.registerComponent(appName, () => App);