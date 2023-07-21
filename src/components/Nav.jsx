import { Link } from "react-router-dom"
import {
    Menu, MenuButton, 
    Button, MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import {GrHomeRounded} from 'react-icons/gr'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BuildDrawer from "./BuildDrawer";

function Nav() {

    const cart = useSelector((state) => state.cart.value);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(cart.length)
    }, [cart])

    return(
        <div>
            <div className='w-96  mx-20 flex justify-evenly sm:w-100 sm:mx-auto sm:gap-x-32 xl:gap-x-12 lg:gap-x-8  2xl:gap-x-80'>
            <Link to="/e-commerce" className='text-sm mt-1 pt-1 lg:relative xl:right-80'><GrHomeRounded size={19}/></Link>


                <label for="search">
                    <input type="search"
                        id="search" 
                        name="search"
                        placeholder="Search for product"
                        className='bg-slate-100 rounded-xl p-2 lg:w-96  outline-none mt-1 h-6'/>
                </label>

                <section className='flex gap-11 lg:relative lg:left-52'>                     
                    <Link to="/productpage" className='text-sm mt-1 pt-1'>Shop</Link>
                    <Link to="/cart" className='text-sm mt-1 pt-1'>Cart <span className='relative left-7 bottom-7 lg:left-7 lg:bottom-7 sm:left-7 sm:bottom-7'>{count}</span></Link>             
                    <BuildDrawer />      
                </section>
            </div>
        </div>    
    )
}

export default Nav