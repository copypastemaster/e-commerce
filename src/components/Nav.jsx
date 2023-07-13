import { Link } from "react-router-dom"
import {
    Menu, MenuButton, 
    Button, MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";

function Nav() {
    return(
        <div>
            <div className='sticky flex justify-evenly'>
                <label for="search">
                    <input type="search"
                        id="search" 
                        name="search"
                        placeholder="Search for product"
                        className='bg-slate-100 rounded-xl p-2 w-100 outline-none mt-1 h-6'/>
                </label>

                <section className='flex gap-11'>
                    {/* <h1 className='text-sm'
                        >
                        Products
                    </h1> */}
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} size='sm' backgroundColor='whiteAlpha.100' className='mt-0'>
                            Products
                        </MenuButton>
                        <MenuList>
                            <MenuItem>For your computer</MenuItem>
                            <MenuItem>Our pre-builts</MenuItem>
                            <MenuItem>Build your own</MenuItem>

                        </MenuList>
                    </Menu>
                    
                    <Link to="/" className='text-sm mt-1 pt-1'>Home</Link>
                    <h1 className='text-sm mt-1 pt-1'>Cart</h1>                   
                </section>
            </div>
        </div>    
    )
}

export default Nav