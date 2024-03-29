import React from "react";
import { View } from "react-native";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";
import MatchesBox from "../components/Matches/Matches";
export default function Matches() {
	return (
		<View style={{ flexDirection: "column" }}>
			<Header />
			<Title title="Sugestões" />
			<MatchesBox />
			<View style={{ height: 455 }}></View>
		</View>
	);
}
