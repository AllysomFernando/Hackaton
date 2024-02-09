import { View, StyleSheet, Text, TextInput, Input, RCTView, FlatList } from "react-native";
import React from "react";



export default function Search() {
        return (
            <View style={styles.box}>
                <View style={styles.barraPesquisa}>
                    <TextInput placeholder="Qual produto" style={{ padding: 10 }} on />
                </View>
                <View style={{borderColor:"black", borderWidth:"1px, paddingHorizontal:2"}}></View>
                <View >
                    <Text style={{padding:10,}}>Pitaya</Text>
                </View>
            </View>
        )
    }

    const styles = StyleSheet.create({
        box: {
            display: "flex",
            backgroundColor: "#F0F0F0",
            marginHorizontal: 20,
            borderRadius: 10,
        },

        container: {
            flex: 1,
            paddingTop: 22,
        },
        item: {
            padding: 2,
            fontSize: 12,
            height: 15,
        },


    })
