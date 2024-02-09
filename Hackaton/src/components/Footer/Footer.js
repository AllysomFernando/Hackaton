import React from "react";
import { View, StyleSheet, Text, StatusBar,Image, TouchableOpacity,  } from "react-native";
import FooterImage1 from "./FooterImage1";
import FooterImage2 from "./FooterImage2";
import FooterImage3 from "./FooterImage3";
import FooterImage4 from "./FooterImage4";




export default function Footer(){
    
    return (
        <View style={styles.container}>
            <FooterImage1/>
            <FooterImage2/>
            <FooterImage3/>
            <FooterImage4/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 30,
        justifyContent: "space-between",
        alignItems: "flex-end",
    }
})
