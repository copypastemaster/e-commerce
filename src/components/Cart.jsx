import { Fragment } from "react";
import Nav from "./Nav";
import { useSelector } from "react-redux";

function Cart() {

    const cart = useSelector((state) => state.cart.value)

    console.log(cart);
    return(
        <>
            <Nav />
            {cart.map((items) => {
                return (
                    <Fragment key={items.name}>
                        <h1>{items.price}</h1>
                        <h1>{items.name}</h1>
                        <h1>{items.img}</h1>
                        <h1>Quantity -- {items.quantity} ${items.totals}</h1>
                     </Fragment>
                )
            })}
        </>
    )
}

export default Cart;