import React from "react";
import {
	View,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
	TextInput,
} from "react-native";

export default function Input() {
	return (
		<View style={styles.Home}>
			<View>
				<Text>CEP</Text>
			</View>
			<TextInput style={styles.TextInput}></TextInput>
			<View>
				<Text>Endereço</Text>
			</View>
			<TextInput style={styles.TextInput}></TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	Home: {
		alignSelf: "center",
		display: "flex",
	},
	TextInput: {
		alignSelf: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: 204,
		height: 34,
		boxSizing: "border-box",
		borderWidth: 1,
		borderColor: "rgba(140,140,140,1)",
		borderRadius: 9,
	},
});
