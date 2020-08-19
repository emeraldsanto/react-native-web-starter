import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export function App() {
	return (
		<View style={styles.container}>
			<Text>
				This is a cross platform application! It is now running on
				
				<Text style={styles.bold}>
					{" " + Platform.OS}.
				</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		alignItems: "center",
		justifyContent: "center"
	},
	bold: {
		fontWeight: "bold"
	}
});