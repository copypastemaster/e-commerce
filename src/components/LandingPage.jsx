import heroPhoto from '../assets/hero.avif'
import bestSeller from '../assets/bestseller.avif'
import { Box, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function LandingPage () {
    return (
        <div className='flex-col'>
            <Hero/>
        </div>
    )
}

function Hero() {
    return(
        <div className='md:flex md:justify-between md:gap-8 h-90 bg-white text-black'>
            <img src={heroPhoto} 
                 alt="hero-photo"
                 className="md:w-3/6 lg:w-auto lg:overflow-y-hidden"/>

            <section className='flex-col space-y-5 h-80 my-10 md:w-1/3 md:mx-auto md:flex-col md:space-y-52 text-center'>
                <section className='hidden md:flex justify-end gap-10'>
                    <Link to="/productpage" className='relative bottom-8'>Products</Link>
                </section>
                
                <h1 className='text-3xl leading-normal md:text-2xl lg:text-4xl'>Build your own, buy a pre-built, or piece by piece of hardware from our store.</h1>
                <Link to='/productpage'>
                    <button className="bg-slate-700 rounded-lg text-white p-2 lg:relative lg:top-6">Check out our products!</button>
                </Link>
            </section>
        </div>
    )
}





export default LandingPage;