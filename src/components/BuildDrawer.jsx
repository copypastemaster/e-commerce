import React, { Fragment } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export default function BuildDrawer() {
    const build = useSelector((state) => state.build.value);
    console.log(build)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    let a = [];
    
    build.map((items) => {
        let prices = items.price;
        let split = prices.split('$').join('');
        a.push(parseInt(split));
    })

    let total = a.reduce((acc, curr) => acc+curr)
    
  return (
    <>
        <p ref={btnRef} onClick={onOpen} className='text-sm mt-1 pt-1 cursor-pointer'>
            Build
        </p>

        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Build your own</DrawerHeader>

                <DrawerBody>
                    {build.map((item) => {
                        return( 
                            <div className='flex justify-between' key={item.img}>
                                <img src={item.img} className='h-20 w-24'/>
                                <h1 className='relative top-6'>{item.name}</h1>
                                <p className='relative top-6'>{item.price}</p>
                            </div>
                        )
                    })}
                </DrawerBody>

                <DrawerFooter className='flex gap-52'> 
                    <h1>Total</h1>
                    <p>${total}</p>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
  )
}
