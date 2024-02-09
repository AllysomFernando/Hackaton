import React from "react";
import { View, StyleSheet, Text, StatusBar,Image, TouchableOpacity,  } from "react-native";

export default function FooterImage2(){
    
    return (
        <View>
            <TouchableOpacity onPress={onPressButton}>
                <Image source={require('../../../assets/images/Frame 2.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const onPressButton = () => {
    Alert.alert('Botão pressionado!');
  };