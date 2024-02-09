import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header/Header";
import MyTitle from "../components/Title/Title";
import Propose from "../components/Propose/Propose";
import Footer from "../components/Footer/FooterImage";

function MyProducts() {
	return (
		<View>
			<Header />
			<MyTitle title="Seus Produtos" />
			<Propose nameRest="nameRest" adress="adress"/>
			<Footer/>
		</View>
	);
}

export default MyProducts;
