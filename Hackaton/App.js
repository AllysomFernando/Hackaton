import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Matches from "./src/screens/Matches";
import MyProducts from "./src/screens/MyPropose";
import Forms from "./src/screens/Forms";
import { AppProvider } from "./context";

function App() {
	const Tab = createBottomTabNavigator();
	return (
		<AppProvider  >
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Sugestões" component={Matches} />
				<Tab.Screen name="Minhas Propostas" component={MyProducts} />
				<Tab.Screen name="Procurar" component={Forms} />
			</Tab.Navigator>
		</NavigationContainer>
		</AppProvider>

	);
}

export default App;
