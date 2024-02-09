import React from "react";
import {
	View,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
} from "react-native";

export default function ButtonChat({ message }) {
	const onPressButton = () => {
		Alert.alert("Botão pressionado!");
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<View style={styles.container2}>
				<TouchableOpacity onPress={onPressButton} style={styles.container}>
					<Text style={{ color: "white" }}>{message}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: "#5FAA00",
		borderRadius: 10,
		width: 150,
		alignItems: "center",
	},
});
