import React from "react";
import { View } from "react-native";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import ProdutoProdutor from "../components/ProductProductor/ProductProductor";
export default function ProductProductor() {
	return (
		<View style={{ flexDirection: "column" }}>
			<Header />
			<Title title="Sugestões" />
			<ProdutoProdutor />
			<View style={{ height: 455 }}></View>
		</View>
	);
}
