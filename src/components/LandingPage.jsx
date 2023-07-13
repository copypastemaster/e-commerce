import { HashLink  } from "react-router-hash-link"
import heroPhoto from '../assets/hero.avif'
import bestSeller from '../assets/bestseller.avif'
import { Box, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function LandingPage () {
    return (
        <div className='flex-col'>
            <Hero/>
            <Featured />
        </div>
    )
}

function Hero() {
    return(
        <div className='md:flex md:justify-between md:gap-8 h-90'>
            <img src={heroPhoto} 
                 alt="hero-photo"
                 className="md:w-3/6 lg:w-auto lg:overflow-y-hidden"/>

            <section className='flex-col space-y-5 md:w-1/3 md:mx-auto md:flex-col md:space-y-52 text-center'>
                <section className='hidden md:flex justify-end gap-10'>
                    <h1>About</h1>
                    <Link to="/productpage">Products</Link>
                </section>
                
                <h1 className='text-3xl leading-normal md:text-2xl lg:text-4xl'>Build your own, buy a pre-built, or piece by piece of hardware from our store.</h1>
                <Link to='/productpage'>
                    <button className="bg-slate-700 rounded-lg text-white p-2 lg:relative lg:top-6">Check out our products!</button>
                </Link>
            </section>
        </div>
    )
}

function Featured() {
    return (
        <div id="featured" className='bg-slate-800 flex-col space-y-6 text-center lg:space-y-20'>
            <h1 className='text-white space-y-3 w-80 mx-auto text-4xl mt-10 md:mt-0 lg:text-5xl  lg:mt-0 p-3'>Our best seller of the week!</h1>
            <Box boxSize={{base: 'md', md: 'lg', lg: '2xl'}} className='w-1/2 mx-auto'>
                <Image src={bestSeller} alt='best seller product' className="rounded-xl"/>
                <h3 className='text-white relative'>Dark Project One KD87A</h3>
            </Box>
            {/* <img src={bestSeller}
                 className='w-80 mx-auto rounded-xl lg:w-100 lg:h-100'/> */}

            <FeaturedHalf />
        </div>
    )
}

function FeaturedHalf() {
    return(
        <div>
            
        </div>
    )
}

function Footer() {
    return <></>
}

export default LandingPage;