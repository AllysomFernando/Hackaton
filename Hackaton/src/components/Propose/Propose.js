import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ProposeItem({ restaurantData }) {
	return (
		<View style={styles.card}>
			<View style={{ flexDirection: "row" }}>
				<View style={styles.image}>
					<Image />
				</View>
				<View style={styles.information}>
					<Text style={styles.nameRest}>{restaurantData.nameRest}</Text>
					<Text style={styles.address}>{restaurantData.address}</Text>
					<View style={styles.productSection}>
						<View>
							<Text style={styles.product}>{restaurantData.product}</Text>
						</View>
						<View>
							<Text style={styles.quantity}>{restaurantData.quantity}</Text>
							<Text style={styles.un}>unidades</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
				<TouchableOpacity onPress={() => console.log("Reject button pressed")}>
					<Text style={styles.button}>Recusar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default function Propose() {
	const [restaurantData, setRestaurantData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const savedData = await AsyncStorage.getItem("restaurantData");
				if (savedData) {
					setRestaurantData(JSON.parse(savedData));
				}
			} catch (error) {
				console.error("Error retrieving data:", error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const saveDataToStorage = async () => {
			const dataToSave = [
				{
					id: 1,
					nameRest: "Mirtilo",
					address: "Avenida Brasil, 1234, São Paulo - SP",
					quantity: "10",
					seasonality: "3 meses",
					product: "Mirtilo",
					un: "10",
				},
			];

			try {
				await AsyncStorage.setItem(
					"restaurantData",
					JSON.stringify(dataToSave)
				);
				setRestaurantData(dataToSave);
			} catch (error) {
				console.error("Error saving data:", error);
			}
		};

		saveDataToStorage();
	}, []);

	return (
		<View style={styles.container}>
			{restaurantData.map((item, index) => (
				<ProposeItem key={index} restaurantData={item} />
			))}
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
		flexDirection: "column",
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

	address: {
		fontSize: 14,
		marginBottom: 10,
		marginTop: 10,
	},

	productSection: {
		flexDirection: "row",
		justifyContent: "space-between",
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
	button: {
		backgroundColor: "red",
		marginTop: 20,
		width: 100,
		height: 30,
		fontSize: 20,
		color: "white",
		paddingLeft: 15,
		paddingTop: 5,
	},
	textStyle: {
		color: "black",
		backgroundColor: "white",
		width: 100,
		height: 30,
		textAlign: "center",
	},
});
