import { Link } from "react-router-dom"
import {
    Menu, MenuButton, 
    Button, MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import {GrHomeRounded} from 'react-icons/gr'

function Nav() {
    return(
        <div>
            <div className='w-96  mx-20 flex justify-evenly lg:w-100 lg:mx-0 2xl:mr-9'>
            <Link to="/" className='text-sm mt-1 pt-1 lg:relative xl:right-80'><GrHomeRounded size={19}/></Link>


                <label for="search">
                    <input type="search"
                        id="search" 
                        name="search"
                        placeholder="Search for product"
                        className='bg-slate-100 rounded-xl p-2 lg:w-96  outline-none mt-1 h-6'/>
                </label>

                <section className='flex gap-11'>                     
                    <Link to="/productpage" className='text-sm mt-1 pt-1'>Shop</Link>
                    <Link to="/cart" className='text-sm mt-1 pt-1'>Cart <span className='relative bottom-2 lg:left-7 lg:bottom-7'>0</span></Link>                   
                </section>
            </div>
        </div>    
    )
}

export default Nav