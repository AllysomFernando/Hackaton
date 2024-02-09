import React from "react";
import { View, StyleSheet, Text, StatusBar,Image, TouchableOpacity,  } from "react-native";

export default function FooterImage({imagePath}){
    
    return (
        <View>
            <TouchableOpacity onPress={onPressButton}>
                <Image source={require({imagePath})}/>
            </TouchableOpacity>
        </View>
    )
}

const onPressButton = () => {
    Alert.alert('Botão pressionado!');
  };