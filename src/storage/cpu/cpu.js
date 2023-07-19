import intel1 from './corei3-13100F.jpg';
import intel2 from './corei5-12600K.jpg';
import intel3 from './corei5-13400.jpg';
import intel4 from './corei7-12700K.jpg';
import intel5 from './corei913k.jpg';
import amd1 from './ryzen5-7600X.jpg';
import amd2 from './ryzen7-5800X.jpeg';
import amd3 from './ryzen7-7950X3D.jpg';
import amd4 from './ryzen9-5950X.jpg';
import amd5 from './ryzen9-7950X.jpg';



export const cpu = [
    {
        brand: 'AMD',
        name: 'Ryzen 5 7600X',
        img: amd1,
        description: 'he AMD Ryzen 5 7600X is a desktop processor with 6 cores, launched in September 2022, at an MSRP of $299. It is part of the Ryzen 5 lineup, using the Zen 4 (Raphael) architecture with Socket AM5. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 12 threads.',
        prevPrice: '$499',
        price: '$299',
        badge: 'best',
    },
    {
        brand: 'Intel',
        name: 'Core i3-13100F',
        img: intel1,
        description: 'The Intel Core i3-13100F is a desktop processor with 4 cores, launched in January 2023, at an MSRP of $109. It is part of the Core i3 lineup, using the Raptor Lake architecture with Socket 1700. Thanks to Intel Hyper-Threading the core-count is effectively doubled, to 8 threads.',
        prevPrice: '$399',
        price: '$199',
        badge: 'hot'
    },
    {
        brand: 'Intel',
        name: 'Core i5-12600K',
        img: intel2,
        description: 'The Intel Core i5-12600K is a desktop processor with 10 cores, launched in November 2021, at an MSRP of $289. It is part of the Core i5 lineup, using the Alder Lake-S architecture with Socket 1700. Thanks to Intel Hyper-Threading the core-count is effectively doubled, to 16 threads.',
        prevPrice: '$699',
        price: '$399',
        badge: 'new'
    },
    {
        brand: 'Intel',
        name: 'Core i5-13400',
        img: intel3,
        description: 'The Intel Core i5-13400 is a desktop processor with 10 cores, launched in January 2023, at an MSRP of $221. It is part of the Core i5 lineup, using the Raptor Lake architecture with Socket 1700. Thanks to Intel Hyper-Threading the core-count is effectively doubled, to 16 threads.',
        prevPrice: '$599',
        price: '$399',
        badge: 'new',
    },
    {
        brand: 'AMD',
        name: 'Ryzen 7 5800X',
        img: amd2,
        description: 'The AMD Ryzen 7 5800X is a desktop processor with 8 cores, launched in November 2020, at an MSRP of $449. It is part of the Ryzen 7 lineup, using the Zen 3 (Vermeer) architecture with Socket AM4. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 16 threads.',
        prevPrice: '$699',
        price: '$499',
        badge: 'hot'
    },
    {
        brand: 'Intel',
        name: 'Core i9-13900K',
        img: intel4,
        description: 'The Intel Core i9-13900K is a desktop processor with 24 cores, launched in September 2022, at an MSRP of $589. It is part of the Core i9 lineup, using the Raptor Lake architecture with Socket 1700. Thanks to Intel Hyper-Threading the core-count is effectively doubled, to 32 threads.',
        prevPrice: '$899',
        price: '$799',
        badge: 'hot'
    },
    {
        brand: 'AMD',
        name: 'Ryzen 7 7950X3D',
        img: amd3,
        description: 'The AMD Ryzen 9 7950X3D is a desktop processor with 16 cores, launched in January 2023, at an MSRP of $699. It is part of the Ryzen 9 lineup, using the Zen 4 (Raphael) architecture with Socket AM5. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 32 threads.',
        prevPrice: '$799',
        price: '$699',
        badge: 'hot'
    },
    {
        brand: 'AMD',
        name: 'Ryzen 9 5950X',
        img: amd4,
        description: 'The AMD Ryzen 9 5950X is a desktop processor with 16 cores, launched in November 2020, at an MSRP of $799. It is part of the Ryzen 9 lineup, using the Zen 3 (Vermeer) architecture with Socket AM4. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 32 threads. ',
        prevPrice: '$899',
        price: '$799',
        badge: 'new'
    },
    {
        brand: 'AMD',
        name: 'Ryzen 9 7950X',
        img: amd5,
        description: 'The AMD Ryzen 9 7950X is a desktop processor with 16 cores, launched in September 2022, at an MSRP of $699. It is part of the Ryzen 9 lineup, using the Zen 4 (Raphael) architecture with Socket AM5. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 32 threads.',
        prevPrice: '$999',
        price: '$799',
        badge: 'hot'
    },
    {
        brand: 'Intel',
        name: 'Core i7-12700K',
        img: intel5,
        description: 'The Intel Core i7-12700K is a desktop processor with 12 cores, launched in November 2021, at an MSRP of $409. It is part of the Core i7 lineup, using the Alder Lake-S architecture with Socket 1700. Thanks to Intel Hyper-Threading the core-count is effectively doubled, to 20 threads.',
        prevPrice: '$799',
        price: '$599',
        badge: 'hot'
    }
]