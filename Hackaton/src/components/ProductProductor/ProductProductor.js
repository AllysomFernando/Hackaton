import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function ProdutoProdutor() {
  return (
    <View style={styles.ProdutoProdutor}>
      <View style={styles.Border}>
        <Image
          style={styles.Image}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/49vtk7k9adq-I4%3A83057%3B4%3A83053?alt=media&token=81343320-b0c6-4e2f-b16e-368a2aa6f6af",
          }}
        />
        <View style={styles.LayerFruit}>
          <View style={styles.LayerMaca}>
            <Text style={styles.MaABaby}>Maça baby</Text>
            <View style={styles.PriceProduct}>
              <View style={{flexDirection: "row"}}>
                <View style={styles.Button}>
                  <Text style={styles.R2000}>R$ 20,00</Text>
                </View>
                <Text style={styles.ACaixa}>unidade</Text>
              </View>
            </View>
            <Text style={styles.Entrega}>Previsão de entrega: A negociar</Text>
          </View>
        </View>
        <View style={styles.ButtonEdit}>
          <View style={styles.Edit}>
            <Text style={styles.Editar}>Editar</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ProdutoProdutor: {
    alignSelf: 'center',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 375,
    height: 134,
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 18,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(140,140,140,1)",
    borderRadius: 9,
  },
  Border: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Image: {
    width: 87.5,
    height: 84.79,
  },
  LayerFruit: {
    height: "100%",
    // backgroundColor: "blue",
    width:"52%"
  },
  LayerMaca: {
    alignContent: 'center',
    justifyContent: 'center',
    display: "flex",
    flexDirection: "column",
    height: 84.54,
    boxSizing: "border-box",
    paddingLeft: 30,
    width: "115%"

  },
  MaABaby: {
    color: "rgba(33,33,33,1)",
    fontSize: "16px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    letterSpacing: "0.5px",
    // backgroundColor: "red",
    marginBottom:10,
  },
  PriceProduct: {
    display: "flex",
    flexDirection: "row"
  },
  Button: {
    width: 75,
    height: 30,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 11.67,
    boxSizing: "border-box",
    backgroundColor: "rgba(95,170,0,1)",
    flexDirection: "row"
  },
  R2000: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 55,
    height: 19,
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    letterSpacing: "0.4px",
  },
  ACaixa: {
    paddingLeft: 5,
    color: "rgba(33,33,33,1)",
    fontSize: "12.67px",
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    letterSpacing: "0.4px",
  
  },
  Entrega: {
    alignContent: 'center',
    justifyContent: 'center',
    color: "rgba(140,140,140,1)",
    fontSize: "10px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    letterSpacing: "0.3px",
    marginTop: 8,
    width:"62%",
  },
  ButtonEdit: {
    width: 75,
    height: 30,
    borderColor: "rgba(95,170,0,1)",
    borderRadius: 11.67,
    boxSizing: "border-box",
  },
  Edit: {
    display: "flex",
    width: "100%",
    height: "100%",
    paddingLeft: 19,
    paddingRight: 21,
    paddingTop: 6,
    paddingBottom: 5.66,
    borderWidth: 1,
    borderColor: "rgba(95,170,0,1)",
    borderRadius: 11.67,
    boxSizing: "border-box",
  },
  Editar: {
    alignContent: 'center',
    display: "flex",
    flexDirection: "column",
    color: "rgba(95,170,0,1)",
    fontSize: "12px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: "0.4px",
  },
})