import { Image } from "@chakra-ui/react"
import { asus } from "../storage/asusStorage"
// to import card chakra


function Products(props) {
    return(
        <>
           {asus.map((item) => item.peripherals.map((each) => {
                return(
                    <div className='flex flex-wrap gap-10'>
                        <div className='w-60'>
                            <img src={each.keyboardImage}/>
                            <h1 className='text-center text-2xl'>{each.keyboard}</h1>
                        </div>
                        <div className='w-60'>
                            <img src={each.keyboardImage}/>
                            <h1 className='text-center text-2xl'>{each.keyboard}</h1>
                        </div>
                        <div className='w-60'>
                            <img src={each.keyboardImage}/>
                            <h1 className='text-center text-2xl'>{each.keyboard}</h1>
                        </div>
                    </div>
                )                        
            }) )}
        </>
    )
}

export default Products