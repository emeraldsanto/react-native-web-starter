import { Platform, StyleSheet } from "react-native";

export const DescriptionScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		alignItems: "center",
		justifyContent: "center"
	},
	list: {
		width: Platform.OS === "web" ? undefined : "100%",
		marginVertical: 15,
		paddingHorizontal: 15
	},
	point: {
		alignItems: "center",
		flexDirection: "row"
	},
	bullet: {
		width: 5,
		height: 5,
		marginEnd: 5,
		borderRadius: 5,
		backgroundColor: "#000000"
	}
});