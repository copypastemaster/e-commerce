import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ProductDisplay from './ProductDisplay'


function ProductHeader({firstContent, secondContent}) {
    return(
        <>
            <Tabs size={{base: 'sm', md: 'sm', lg:'lg'}} className='my-10'>
                <TabList>
                    <Tab>
                        For your computer
                    </Tab>
                    <Tab>Our pre-builts</Tab>
                    <Tab>Build your own</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>{firstContent}</TabPanel>
                    <TabPanel>{secondContent}</TabPanel>
                </TabPanels>               
            </Tabs>
        </>
    )
}

export default ProductHeader