import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function ProdutoProdutor() {
  return (
    <View style={styles.ProdutoProdutor}>
      <View style={styles.Group32}>
        <Image
          style={styles.Group31}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/lhm0ahitruf-I4%3A83057%3B4%3A83053?alt=media&token=b513893e-3f67-424f-9dc8-290c8fea4e6c",
          }}
        />
        <View style={styles.Group28}>
          <View style={styles.Group109}>
            <Text style={styles.MaABaby}>Maça baby</Text>
            <View style={styles.Group231}>
              <View style={styles.Group22}>
                <Text style={styles.R2000}>R$ 20,00</Text>
              </View>
              <Text style={styles.ACaixa}>a caixa</Text>
            </View>
            <Text style={styles.Entrega}>entrega:</Text>
          </View>
          <Text style={styles.NegociarComOProdutor}>
            negociar com o produtor
          </Text>
        </View>
        <View style={styles.Group30}>
          <View style={styles.Group25}>
            <Text style={styles.Editar}>Editar</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ProdutoProdutor: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 375,
    height: 134,
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 18,
    paddingBottom: 19,
    borderColor: "rgba(140,140,140,1)",
    borderRadius: 9,
    boxSizing: "border-box",
  },
  Group32: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingRight: 0.27,
    boxSizing: "border-box",
  },
  Group31: {
    width: 87.5,
    height: 84.79,
  },

  Group28: {
    display: "flex",
    width: 180,
    height: "100%",
    boxSizing: "border-box",
    backgroundColor: "red",
  },

  Group109: {
    
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 84.54,
    boxSizing: "border-box",
  },
  MaABaby: {
    color: "rgba(33,33,33,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    letterSpacing: "0.5px",
  },
  Group231: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  Group22: {
    width: 75,
    height: "100%",
    paddingLeft: 7,
    paddingRight: 13,
    paddingTop: 6,
    paddingBottom: 5.66,
    borderRadius: 11.67,
    boxSizing: "border-box",
    backgroundColor: "rgba(95,170,0,1)",
  },
  R2000: {
    color: "rgba(255,255,255,1)",
    fontSize: "12.67px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "900",
    letterSpacing: "0.4px",
  },
  ACaixa: {
    color: "rgba(33,33,33,1)",
    fontSize: "12.67px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    letterSpacing: "0.4px",
  },
  Entrega: {
    color: "rgba(140,140,140,1)",
    fontSize: "10px",
    lineHeight: "130%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    letterSpacing: "0.3px",
  },
  NegociarComOProdutor: {
    position: "absolute",
    top: "84.5%",
    bottom: "0%",
    left: "0%",
    right: "4.06%",
    color: "rgba(255,132,132,1)",
    fontSize: "10px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    letterSpacing: "0.3px",
  },
  Group30: {
    width: 75,
    height: "100%",
    borderColor: "rgba(95,170,0,1)",
    borderRadius: 11.67,
    boxSizing: "border-box",
  },
  Group25: {
    width: "100%",
    height: "100%",
    paddingLeft: 19,
    paddingRight: 21,
    paddingTop: 6,
    paddingBottom: 5.66,
    borderColor: "rgba(95,170,0,1)",
    borderRadius: 11.67,
    boxSizing: "border-box",
  },
  Editar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(95,170,0,1)",
    fontSize: "12.67px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: "0.4px",
  },
})
