import { SearchBar } from "react-native-screens";
import Title from "../Title/Titile";
import SearchBar from './../SearchBar/SearchBar';


function OrderComponent() {
    return (
        <>
            <Title text={"Seus Pedidos"}></Title>
            <SearchBar></SearchBar>
        </>
    );
}
export default OrderComponent;