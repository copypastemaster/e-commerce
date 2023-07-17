import asusimg from './asus-rx7600.png';
import razer from './razer-corex.jpg';
import corsair from './corsair-hydrogfx.webp';
import msi from './msi-rtx4090.png';
import asrock from './asrock-rx7900.png';
import gigabyte from './gigabyte-rtx4090.webp';

export const graphics = [
    {
        brand: 'asus',
        name: 'RX7600',
        img: asusimg,
        description: 'The Radeon RX 7600 is a performance-segment graphics card by AMD, launched on May 24th, 2023. Built on the 6 nm process, and based on the Navi 33 graphics processor, in its Navi 33 XL variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on Radeon RX 7600. Additionally, the DirectX 12 Ultimate capability guarantees support for hardware-raytracing, variable-rate shading and more, in upcoming video games. The Navi 33 graphics processor is an average sized chip with a die area of 204 mm² and 13,300 million transistors',
        prevPrice: '$1599',
        price: '$799',
        badge: 'best',
    },
    {
        brand: 'zotac',
        name: 'RTX 3090',
        img: razer,
        description: 'The GeForce RTX 3090 is an enthusiast-class graphics card by NVIDIA, launched on September 1st, 2020. Built on the 8 nm process, and based on the GA102 graphics processor, in its GA102-300-A1 variant, the card supports DirectX 12 Ultimate.',
        prevPrice: '$1399',
        price: '$999',
        badge: 'hot',
    },
    {
        brand: 'corsair',
        name: 'Corsair HydrgoGFX',
        img: corsair,
        description: 'Hydro GFX lets you step up to liquid-cooled graphics performance, factory overclocked by 20%,  and pre-assembled for super simple drop-in installation. It’s powered by the MSI GTX 980Ti GPU, and cooled with the Corsair Hydro Series H55.',
        prevPrice: '$999',
        price: '$699',
        badge: 'new'
    },
    {
        brand: 'msi',
        name: 'MSI RTX 4090',
        img: msi,
        description: 'The GeForce RTX 4090 is an enthusiast-class graphics card by NVIDIA, launched on September 20th, 2022. Built on the 5 nm process, and based on the AD102 graphics processor, in its AD102-300-A1 variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on GeForce RTX 4090. Additionally, the DirectX 12 Ultimate capability guarantees support for hardware-raytracing, variable-rate shading and more, in upcoming video games. The AD102 graphics processor is a large chip with a die area of 609 mm² and 76,300 million transistors.',
        prevPrice: '$1599',
        price: '$999',
        badge: 'new'
    },
    {
        brand: 'asrock',
        name: 'ASRock RX7900',
        img: asrock,
        description: 'The Radeon RX 7900 XT is an enthusiast-class graphics card by AMD, launched on November 3rd, 2022. Built on the 5 nm process, and based on the Navi 31 graphics processor, in its Navi 31 XT variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on Radeon RX 7900 XT. Additionally, the DirectX 12 Ultimate capability guarantees support for hardware-raytracing, variable-rate shading and more, in upcoming video games. ',
        prevPrice: '$1699',
        price: '$1499',
        badge: 'hot',
    },
    {
        brand: 'gigabyte',
        name: 'Gigabyte RTX 4090',
        img: gigabyte,
        description: 'The GeForce RTX 4090 Ti is a graphics card by NVIDIA, launched in 2023. Built on the 5 nm process, and based on the AD102 graphics processor, in its AD102-400-A1 variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on GeForce RTX 4090 Ti. Additionally, the DirectX 12 Ultimate capability guarantees support for hardware-raytracing, variable-rate shading and more, in upcoming video games. The AD102 graphics processor is a large chip with a die area of 609 mm² and 76,300 million transistors. Unlike the fully unlocked RTX TITAN Ada, which uses the same GPU but has all 18432 shaders enabled.',
        prevPrice: '$2599',
        price: '$2199',
        badge: 'best'
    }
]