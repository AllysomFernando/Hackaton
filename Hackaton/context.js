import React, { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
};

export const AppProvider = ({ children }) => {
	const [restaurantData, setRestaurantData] = useState([
		{
			id: 1,
			nameRest: "Mirtilo",
			address: "Avenida Brasil, 1234, São Paulo - SP",
			quantity: "10",
			seasonality: "3 meses",
			product: "Restaurante do George",
			un: "10",
			distancia: "5 km",
			valor: "R$ 10,00",
		},
	]);

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

	useEffect(() => {
		fetchData();
	}, []);

	const value = {
		restaurantData,
		setRestaurantData,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
