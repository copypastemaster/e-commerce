import Nav from "./Nav"
import { useSelector } from "react-redux"
import { Badge, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {pushItems} from '../features/cartStore'
import { useEffect, useState } from "react";

function View() {
    const product = useSelector((state) => state.product.value);
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count => count + 1);
    }

    const decrement = () => {
        count != 0 ? setCount(count => count - 1) : setCount(count)
    }

    let total = product.price;
    let splitters = total.split('$').join('')
    let totalP = splitters * count

    return (
        <>
            <Nav />
            <div className='flex flex-wrap md:flex-nowrap my-10 lg:mx-auto lg:max-w-screen-lg '>
                <img src={product.img} className='w-52 lg:w-100 md:relative xl:relative xl:right-20'/>
                <section className='flex flex-col w-1/2 '>
                    <Badge className='w-1/5 text-center' colorScheme={product.badge === 'hot' ? 'red' : 'blue'}>{product.badge}</Badge>
                    <h1 className='text-3xl '>{product.name}</h1>
                    <section className='flex gap-3'>
                        <del className='text-red-700'>{product.prevPrice}</del>
                        <span>{product.price}</span>
                    </section>
                    <p className='text-xs sm:text-sm lg:text-xl'>{product.description}</p>
                </section>
                <section className='md:w-32 md:align-bottom'>
                    <div className='text-center flex justify-center gap-3 my-10 md:relative md:left-44'>                    
                        <Button onClick={decrement}>-</Button>
                        <span className='relative top-2'>{count}</span>
                        <Button onClick={increment}>+</Button>
                    </div>
                    <Button className='w-96 mx-16 -my-10' onClick={() => {
                        dispatch(pushItems({
                            name: product.name,
                            price: product.price,
                            img: product.img,
                            totals: totalP,
                            quantity: count
                        }))
                    }}>Proceed to checkout</Button>
                </section>
                
            </div>
        </>
    )
}

export default View