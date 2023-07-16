import {
    Card, CardBody,
    CardFooter,
} from '@chakra-ui/react'


function SideBar({ product }) {
    
    return  (
        <div className="flex flex-wrap justify-evenly gap-10">
            {product.map((item) => {
                return (
                    <Card key={item.name}>
                        <CardBody>
                            <img src={item.img} className='w-24'/>
                        </CardBody>
                        <CardFooter>
                            <h1 className='text-center w-20'>{item.name}</h1>
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
    )  // swap the null with default values eg. if all, all items
}

export default SideBar