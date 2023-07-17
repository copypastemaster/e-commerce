import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ProductPage from './ProductPage'

function ProductHeader() {
    return(
        <>
            <Tabs size={{base: 'sm', md: 'sm', lg:'lg'}}>
                <TabList>
                    <Tab>
                        <Link to="/productpage">For your computer</Link>
                    </Tab>
                    <Tab>Our pre-builts</Tab>
                    <Tab>Build your own</Tab>
                </TabList>               
            </Tabs>
        </>
    )
}

export default ProductHeader