import React from "react";
import { View, StyleSheet, Text, StatusBar,Image, TouchableOpacity,  } from "react-native";
import FooterImage from "./FooterImage";

export default function Footer(){
    
    return (
        <View>
            <FooterImage imagePath={'assets\images\Frame 1.png'}/>
            <FooterImage imagePath={'assets\images\Frame 2.png'}/>
            <FooterImage imagePath={'assets\images\Frame 3.png'}/>
            <FooterImage imagePath={'assets\images\Frame 4.png'}/>
        </View>
    )
}
