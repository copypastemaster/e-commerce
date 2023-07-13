import Nav from "./Nav"
import Products from "./Products"
import {HamburgerIcon} from '@chakra-ui/icons'
import {
    Drawer, DrawerBody, DrawerFooter,
    DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, useDisclosure, Button,
    Tabs, TabList, Tab, 
    TabPanels, TabPanel, Image
} from '@chakra-ui/react'
import '../assets/products.css'
import { asus } from "../storage/asusStorage"

import { useRef } from "react"

function ProductPage() {
    return( 
        <>
            <Nav/>
            <Hamburger/>
        </>
    )
}   

function Hamburger() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const display = (item) => {
        return(
            <>

            </>
        )
    }

    return (
        <>
            <Button ref={btnRef} onClick={onOpen} className="relative top-11 lg:invisible">
                <HamburgerIcon/>
            </Button>

            <Drawer isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size='xs'
                    isFullHeight={false}
                    colorScheme="blackAlpha">

                <DrawerContent>
                    <DrawerHeader className="text-center">Hardware</DrawerHeader>
                    <DrawerBody className="hamburger space-y-2">
                        <h3>Graphics Card</h3>
                        <h3>Central Processing Unit</h3>
                        <h3>Motherboard</h3>
                        <h3>SSD</h3>
                        <h3>HDD</h3>
                        <h3>Coolers</h3>
                        <h3>Fans</h3>
                    </DrawerBody>

                    <DrawerHeader className="text-center">Peripherals</DrawerHeader>
                    <DrawerBody className='hamburger space-y-2'>
                        <h3>Keyboard</h3>
                        <h3>Mouse</h3>
                        <h3>Headset</h3>
                        <h3>Monitor</h3>
                    </DrawerBody>
                </DrawerContent>        
            </Drawer>

        <div className='flex lg:justify-between lg:w-4/5'>   
            <div className='DESKTOP w-1/5 invisible lg:visible bg-slate-200 p-2 rounded-sm text-black h-100 space-y-9 lg:w-1/6'>
                    <h1 className='text-xl text-center my-3'>Hardware</h1>
                    <h3>Graphics Card</h3>
                    <h3>Central Processing Unit</h3>
                    <h3>Motherboard</h3>
                    <h3>SSD</h3>
                    <h3>HDD</h3>
                    <h3>Coolers</h3>
                    <h3>Fans</h3>

                    <h1 className='text-xl text-center my-3'>Peripherals</h1>
                    <h3>Keyboard</h3>
                    <h3>Mouse</h3>
                    <h3>Headset</h3>
                    <h3>Monitor</h3>
            </div>

            <section className=''>   
                <Tabs className='no-scrollbar overflow-scroll'>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Asus</Tab>
                        <Tab>Razer</Tab>
                        <Tab>Corsair</Tab>
                        <Tab>MSI</Tab>
                        <Tab>ASRock</Tab>
                        <Tab>Dell</Tab>
                        <Tab>Phanteks</Tab>
                        <Tab>Gigabyte</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>Hi to all</TabPanel>
                        <TabPanel>
                           {/* {asus.map((item) => item.peripherals.map((each) => {
                                return(
                                    <>
                                        {each.headset}
                                       <img src={each.headsetImage} alt="" /> 
                                    </>
                                )
                           }) )} */}
                           <Products />
                        </TabPanel>

                    </TabPanels>
                </Tabs>

                
            </section>

               
        </div>                    
        </>
        
    )
}

export default ProductPage