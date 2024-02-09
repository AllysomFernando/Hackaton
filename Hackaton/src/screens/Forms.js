import React from "react";
import {
	View,
	StyleSheet,
	Text,
	StatusBar,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import ButtonSearch from "../components/ButtonSearch/ButtonSearch";
import Input from "../components/input/Input";

export default function Forms() {
	return (
		<View style={{ flexDirection: "column" }}>
			<Header />
			<Title title="Produtos" />
			<Search />
			<ButtonSearch />
		</View>
	);
}
