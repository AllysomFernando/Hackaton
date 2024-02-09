import React from "react";
import { View, StyleSheet, Text, StatusBar,Image, TouchableOpacity} from "react-native";
import Header from '../components/Header/Header'
import Title from '../components/Title/Title'
import Footer from '../components/Footer/Footer'

export default function MyProducts() {
	return (
		<View style={{flexDirection: "column"}}>
			<Header />
			<Title title="Meus Produtos" />

            <Footer/> 
            
		</View>
	);
}