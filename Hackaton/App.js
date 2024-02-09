import { View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Matches from "./src/screens/Matches";
import MyProducts from "./src/screens/MyPropose";
import ProductProductor from "./src/screens/ProductProductor";


function App() {
	const Tab = createBottomTabNavigator();
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Sugestões" component={Matches} />
				<Tab.Screen name="Minhas Propostas" component={MyProducts} />
				<Tab.Screen name="Orders" component={MyProducts} />
				<Tab.Screen name="Meus Produtos" component={ProductProductor} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default App;
