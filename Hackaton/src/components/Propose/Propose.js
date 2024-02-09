import React from "react";
import { View, StyleSheet, Text, StatusBar, Image } from "react-native";
import ButtonChat from "../ButtonConversar/ButtonChat";
import Footer from "../Footer/FooterImage";

export default function Propose(
	{ nameRest },
	{ adress },
	// { product },
	// { quantity },
	// { seasonality }
) {
	return (
			<View style={styles.card}>
				<View style={{ flexDirection: "row" }}>
					<View style={styles.image}>
						<Image></Image>
					</View>
					<View style={styles.information}>
						<Text style={styles.nameRest}>{nameRest}</Text>
						<Text style={styles.adress}>{adress}</Text>
						<View style={styles.productSection}>
							<View>
								<Text style={styles.product}>teste produto</Text>
							</View>
							<View>
								<Text style={styles.quantity}>teste un</Text>
								<Text style={styles.un}>unidades</Text>
							</View>
                            <View>
								<Text style={styles.quantity}>teste un</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
					<ButtonChat message={"Mandar Mensagem"} />
					<ButtonChat message={"Recusar"} />
				</View>
			</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderWidth: 0.5,
		borderColor: "#8C8C8C",
		borderRadius: 10,
		marginHorizontal: 20,
		paddingHorizontal: 16,
		height: 180,
		paddingTop: 16,
		display: "flex",
		flexDirection: "collumn",
	},

	image: {
		paddingVertical: 30,
		backgroundColor: "red",
		borderWidth: 0.5,
		borderColor: "#8C8C8C",
		width: 60,
		height: 60,
		marginRight: 12,
		borderRadius: 90,
	},

	information: {
		display: "flex",
		flexDirection: "column",
		position: "relative",
	},

	nameRest: {
		fontSize: 24,
		marginBottom: -5,
	},

	adress: {
		fontSize: 14,
		marginBottom: 10,
	},

	productSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		// backgroundColor: 'red',
		marginTop: 5,
		width: 250,
	},

	product: {
		fontSize: 20,
		backgroundColor: "#BEB7C5",
		opacity: 0.7,
		paddingHorizontal: 5,
		paddingVertical: 8,
		alignItems: "center",
	},

	quantity: {
		fontSize: 18,
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 2,
		display: "flex",
		alignSelf: "flex-end",
		marginBottom: -5,
	},

	un: {
		display: "flex",
		paddingLeft: 5,
		alignSelf: "flex-end",
	},
});
