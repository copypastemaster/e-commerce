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
            <div className='sticky flex justify-evenly 2xl:mr-9'>
            <Link to="/" className='text-sm mt-1 pt-1 lg:relative xl:right-80'><GrHomeRounded size={19}/></Link>


                <label for="search">
                    <input type="search"
                        id="search" 
                        name="search"
                        placeholder="Search for product"
                        className='bg-slate-100 rounded-xl p-2 w-100 outline-none mt-1 h-6'/>
                </label>

                <section className='flex gap-11'> 
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} size='sm' backgroundColor='whiteAlpha.100' className=''>
                            Services
                        </MenuButton>
                        <MenuList>
                            <MenuItem>For your computer</MenuItem>
                            <MenuItem>Our pre-builts</MenuItem>
                            <MenuItem>Build your own</MenuItem>

                        </MenuList>
                    </Menu>
                    <Link to="/productpage" className='text-sm mt-1 pt-1'>Shop</Link>
                    <h1 className='text-sm mt-1 pt-1'>Cart</h1>                   
                </section>
            </div>
        </div>    
    )
}

export default Nav