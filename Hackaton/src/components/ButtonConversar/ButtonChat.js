import React from "react";
import { View, StyleSheet, Text, StatusBar , Button} from "react-native";

export default function ButtonChat(){
    const onPressButton = () => {
        Alert.alert('Botão pressionado!');
      };
    
    return (
        <View>
            <Button title="Pressione-me" onPress={onPressButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        position: "absolute",
        marginLeft: -20,
        marginBottom: -20,
    },
})
