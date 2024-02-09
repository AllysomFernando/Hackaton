import React from "react";
import { View, StyleSheet, Text, StatusBar,Image, TouchableOpacity,  } from "react-native";

export default function FooterImage1(){
    
    return (
        <View>
            <TouchableOpacity onPress={onPressButton}>
                <Image source={require('../../../assets/images/Frame 1.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const onPressButton = () => {
    Alert.alert('Botão pressionado!');
  };