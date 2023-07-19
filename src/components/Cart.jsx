import { Fragment } from "react";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { Box, Button, Divider } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function Cart() {

    const cart = useSelector((state) => state.cart.value)
    const toast = useToast()

    console.log(cart);
    return(
        <>
            <Nav />
            {cart.map((items) => {
                return (
                    <div key={items.name} className='flex gap-5 md:w-1/3 md:mx-auto border md:justify-around p-10'>
                            <Image src={items.img} alt='computer hardware part' className='w-1/2  md:w-32 md:h-24 md:relative md:top-5'/>
                        <section className='flex-col'>
                            <h1 className='text-2xl md:w-32'>{items.name}</h1>
                            <div className='flex-col'>
                                <footer className='flex gap-3 my-5'>
                                        <p>{items.quantity} - </p>
                                        <p>${items.totals}</p>
                                        
                                </footer>
                                <Button size={{base: 'sm', md: 'lg'}}
                                        onClick={() => toast({
                                            title: 'Order submitted',
                                            description: `Your item delivery is on the way!`,
                                            status: 'success',
                                            duration: '2000',
                                            isClosable: true,
                                        })}>
                                    Place order
                                </Button>                               
                            </div>
                        </section>
                    </div>
                )
            })}
        </>
    )
}

export default Cart;