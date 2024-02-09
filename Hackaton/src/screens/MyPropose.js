import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header/Header";
import MyTitle from "../components/Title/Title";
import Propose from "../components/Propose/Propose";
import Footer from "../components/Footer/Footer";

function MyProducts() {
	return (
		<View style={{flexDirection: "column"}}>
			<Header />
			<MyTitle />
			<Propose nameRest="nameRest" adress="adress"/>
			<View style={{height: 455 }}></View>       
		</View>
	);
}

export default MyProducts;
