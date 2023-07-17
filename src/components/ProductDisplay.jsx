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
        <div className="flex flex-wrap gap-5">
            {product.map((item) => {
                return (
                    <Card key={item.name}>
                        <CardBody className='w-40  lg:w-56'>
                            <img src={item.img} className='w-100 h-100 max-h-32'/>
                                
                        </CardBody>
                        <CardFooter className='flex-col'>
                            <h1 className='text-xl w-100 xl:w-40'>{item.name}</h1>
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
                                Add to cart</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
    )  // swap the null with default values eg. if all, all items
}

export default ProductDisplay