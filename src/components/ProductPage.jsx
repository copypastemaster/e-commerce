import Nav from "./Nav"
import ProductDisplay from "./ProductDisplay"
import ProductHeader from "./ProductHeader"
import { useEffect, useRef, useState, Fragment } from "react"

import {HamburgerIcon} from '@chakra-ui/icons'
import {
    Drawer, DrawerBody, DrawerFooter,
    DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, useDisclosure, Button,
    Tabs, TabList, Tab, 
    TabPanels, TabPanel, Image
} from '@chakra-ui/react'
import '../assets/products.css'

import { graphics } from "../storage/graphics/graphics"
import { cpu } from "../storage/cpu/cpu"
import { motherboard } from "../storage/motherboard/motherboard"
import { ssd } from "../storage/ssd/ssd"
import { hdd } from "../storage/hdd/hdd"
import { cooler } from "../storage/cooler/cooler"
import { fans } from "../storage/fans/fans"
import { keyboard } from "../storage/keyboards/keyboard"
import { mouse } from "../storage/mouse/mouse"
import { headset } from "../storage/headset/headset"
import { monitor } from "../storage/monitor/monitor"
import { a } from "../storage/allProducts"

function ProductPage() {
    return( 
        <>
            <Nav/>
            <ProductHeader />
            <Hamburger/>
        </>
    )
}   

function Hamburger() {
    

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const [test, setTest] = useState([]);
    const [name, setName] = useState('');
    
    useEffect(() => {
        // [ [], [], [], [], [] ] - shape of (a)
        let b = [];
        a.map((item) => item.forEach((items) => b.push(items)))
        setTest(b);
    }, [])

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
                        <h3 onClick={() => setTest(val => val = graphics)} >Graphics Card</h3>
                        <h3 onClick={() => setTest(val => val = cpu)}>Central Processing Unit</h3>
                        <h3 onClick={() => setTest(val => val = motherboard)}>Motherboard</h3>
                        <h3 onClick={() => setTest(val => val = ssd)}>SSD</h3>
                        <h3 onClick={() => setTest(val => val = hdd)}>HDD</h3>
                        <h3 onClick={() => setTest(val => val = cooler)}>Coolers</h3>
                        <h3 onClick={() => setTest(val => val = fans)}>Fans</h3>
                    </DrawerBody>

                    <DrawerHeader className="text-center">Peripherals</DrawerHeader>
                    <DrawerBody className='hamburger space-y-2'>
                        <h3 onClick={() => setTest(val => val = keyboard)}>Keyboard</h3>
                        <h3 onClick={() => setTest(val => val = mouse)}>Mouse</h3>
                        <h3 onClick={() => setTest(val => val = headset)}>Headset</h3>
                        <h3 onClick={() => setTest(val => val = monitor)}>Monitor</h3>
                    </DrawerBody>
                </DrawerContent>        
            </Drawer>

        <div className='flex lg:justify-between lg:gap-44 lg:w-4/5'>   
            <div className='DESKTOP w-1/5 invisible lg:visible bg-slate-200 p-2 rounded-sm text-black h-100 space-y-9 lg:w-1/6'>
                    <h1 className='text-xl text-center my-3'>Hardware</h1>
                    <h3 onClick={() => setTest(val => val = graphics)}>Graphics Card</h3>
                    <h3 onClick={() => setTest(val => val = cpu)}>Central Processing Unit</h3>
                    <h3 onClick={() => setTest(val => val = motherboard)}>Motherboard</h3>
                    <h3 onClick={() => setTest(val => val = ssd)}>SSD</h3>
                    <h3 onClick={() => setTest(val => val = hdd)}>HDD</h3>
                    <h3 onClick={() => setTest(val => val = cooler)}>Coolers</h3>
                    <h3 onClick={() => setTest(val => val = fans)}>Fans</h3>

                    <h1 className='text-xl text-center my-3'>Peripherals</h1>
                    <h3 onClick={() => setTest(val => val = keyboard)}>Keyboard</h3>
                    <h3 onClick={() => setTest(val => val = mouse)}>Mouse</h3>
                    <h3 onClick={() => setTest(val => val = headset)}>Headset</h3>
                    <h3 onClick={() => setTest(val => val = monitor)}>Monitor</h3>
            </div>

            <section className='flex flex-col gap-5 w-100 max-w-xl max-h-screen overflow-y-scroll no-scrollbar lg:max-w-5xl'>   
                <h1 className='text-center text-xl'>Products {name}</h1>             
                <ProductDisplay product={test}/>               
            </section>

               
        </div>                    
        </>
        
    )
}

export default ProductPage