import Nav from "./Nav";
import { useSelector } from "react-redux";

function Cart() {
    const product = useSelector((state) => state.product.value);

    return(
        <>
            <Nav />
            <h1>{product.name}</h1>
            <img src={product.img}/>
        </>
    )
}

export default Cart;