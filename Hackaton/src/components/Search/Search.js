import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "../../../context";

export default function Search({ onSave }) {
	const [fruitName, setFruitName] = useState("");

	const { restaurantData, setRestaurantData } = useAppContext();

	const handleSubmit = async () => {
		try {
			setRestaurantData([
				...restaurantData,
				{
					id: 1,
					nameRest: fruitName,
					address: "Avenida Brasil, 1234, São Paulo - SP",
					quantity: "10",
					seasonality: "3 meses",
					product: "Restaurante do George",
					un: "10",
					distancia: "5 km",
					valor: "R$ 10,00",
				},
			]);
			setFruitName("");
		} catch (error) {
			console.error("Error saving data:", error);
		}
	};

	return (
		<View style={styles.formContainer}>
			<TextInput
				style={styles.input}
				placeholder="Nome da Fruta"
				value={fruitName}
				onChangeText={(text) => setFruitName(text)}
			/>
			<Button title="Salvar Fruta" onPress={handleSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	formContainer: {
		marginBottom: 20,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	restaurantList: {
		flex: 1,
	},
	restaurantItem: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "lightgray",
		padding: 10,
		borderRadius: 5,
	},
});
