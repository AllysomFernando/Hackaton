import React, { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	StatusBar,
	Image,
	TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MatchesBox() {
	const [productData, setProductData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const savedData = await AsyncStorage.getItem("productData");
				if (savedData) {
					setProductData(JSON.parse(savedData));
				}
			} catch (error) {
				console.error("Error retrieving data:", error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const saveDataToStorage = async () => {
			const dataToSave = {
				nameRest: "Manga",
				valor: "R$ 20,00",
				produtor: "Joao",
				distancia: "10 km",
			};

			try {
				await AsyncStorage.setItem("productData", JSON.stringify(dataToSave));
				setProductData(dataToSave);
			} catch (error) {
				console.error("Error saving data:", error);
			}
		};
		saveDataToStorage();
	}, []);
	return (
		<View style={styles.card}>
			<View style={{ flexDirection: "row" }}>
				<View style={styles.image}>
					<Image />
				</View>
				<View style={styles.information}>
					<Text style={styles.nameRest}>{productData?.nameRest}</Text>
					<Text style={styles.address}>Produtor: {productData?.produtor}</Text>
					<View style={styles.productSection}>
						<View>
							<Text style={styles.valor}>{productData?.valor}</Text>
							<Text style={styles.component2}>
								Distância:{" "}
								<Text style={styles.km}>{productData?.distancia}</Text>
							</Text>
						</View>
					</View>
					<View>
						<TouchableOpacity style={styles.container}>
							<Text style={styles.consultar}>Consultar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	consultar: {
		backgroundColor: "#5FAA00",
		width: 100,
		fontSize: 20,
		color: "white",
		fontWeight: "bold",
		borderRadius: 10,
		paddingVertical: 10,
		paddingLeft: 5,
		height: 40,
		marginTop: 30,
		marginLeft: 150,
	},
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
	component2: {
		height: 20,
	},
	valor: {
		backgroundColor: "#5FAA00",
		width: 100,
		fontSize: 20,
		color: "white",
		fontWeight: "bold",
		borderRadius: 10,
		paddingVertical: 5,
		paddingLeft: 5,
	},
	km: {
		backgroundColor: "#EF8F00",
		width: 50,
		fontSize: 15,
		color: "white",
		fontWeight: "bold",
		borderRadius: 10,
		paddingVertical: 10,
		paddingLeft: 5,
		marginTop: 5,
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
		marginTop: 5,
		height: 20,
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
});
