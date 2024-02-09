import { View } from "moti";
import React from "react";
import { Text, StyleSheet } from "react-native";


function Title({title}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        marginBottom: 34,

    },

    title: {
        fontSize: 26,
    }
});

export default Title;