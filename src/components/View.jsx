import Nav from "./Nav"
import { useSelector } from "react-redux"
import { Badge, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {pushItems} from '../features/cartStore'

function View() {
    const product = useSelector((state) => state.product.value);
    const dispatch = useDispatch();

    return (
        <>
            <Nav />
            <div className='flex flex-wrap outline-dashed my-10 lg:mx-auto lg:max-w-screen-lg '>
                <img src={product.img} className='w-52 lg:w-100 lg:max-w-4xl'/>
                <section className='flex flex-col w-1/2 '>
                    <Badge className='w-1/5 text-center' colorScheme={product.badge === 'hot' ? 'red' : 'blue'}>{product.badge}</Badge>
                    <h1 className='text-3xl '>{product.name}</h1>
                    <section className='flex gap-3'>
                        <del className='text-red-700'>{product.prevPrice}</del>
                        <span>{product.price}</span>
                    </section>
                    <p className='text-xs sm:text-sm lg:text-xl'>{product.description}</p>
                </section>
                <Button className='w-96 mx-16 my-5' onClick={() => {
                    dispatch(pushItems({
                        name: product.name,
                        price: product.price,
                        img: product.img,
                    }))
                }}>Proceed to checkout</Button>
            </div>
        </>
    )
}

export default View