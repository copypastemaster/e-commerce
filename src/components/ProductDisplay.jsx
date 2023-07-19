import {
    Card, CardBody,
    CardFooter, Button, Divider
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { login } from '../features/ItemStore'
import { useDispatch } from 'react-redux'

function ProductDisplay({ product }) {
    const dispatch = useDispatch()

    return  (
        <div className="flex flex-wrap gap-3 w-100">
            {product.map((item) => {
                return (
                    <Card key={item.name} className='relative left-10 w-100'>
                        <CardBody className='md:w-40'>
                            <img src={item.img} className='relative left-4 w-44 sm:w-100 h-100 max-h-32'/>
                                
                        </CardBody>
                        <CardFooter className='flex-col gap-3'>
                            <h1 className='text-xl w-100 xl:w-40 font-medium'>{item.name}</h1>
                            <p className='text-sm'>{item.price}</p>
                            <Link to="/view" className=''>
                                <Button className='w-52' onClick={() => {
                                    dispatch(login({
                                        name: item.name,
                                        img: item.img,
                                        price: item.price,
                                        description: item.description,
                                        badge: item.badge,
                                        prevPrice: item.prevPrice
                                    }
                                    ))
                                }}>
                                View</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
    )  // swap the null with default values eg. if all, all items
}

export default ProductDisplay