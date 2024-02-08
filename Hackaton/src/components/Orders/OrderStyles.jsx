import { StyleSheet } from "react-native";
import RootColors from "../Colors/rootColors";


const OrderStyles = (props) => StyleSheet.create({
    Background: {
        backgroundColor: RootColors.background,
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: 80,
        borderRadius: 20,
        margin: 10,
        backgroundColor: '#00ff7d',
    },

    gettingstart: {
        fontSize: 15,
        color: '#333333',
        fontFamily: 'Roboto_700Bold',
    },

    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }


})
export default OrderStyles;