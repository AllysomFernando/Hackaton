
import React, { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}

export const AppProvider = ({ children }) => {
    const [restaurantData, setRestaurantData] = useState([]);

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