import React, { useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Icon, IconButton } from '@chakra-ui/react'
import {graphics} from '../storage/graphics/graphics'
import {cpu} from '../storage/cpu/cpu'
import { motherboard } from '../storage/motherboard/motherboard'

export default function BuildYourOwn() {
    
  return (
    <div className='flex-col md:flex-row outline-dotted'>
      <DisplayParts prod={graphics}/>
      <DisplayParts prod={cpu}/>
      <section>
        hi
      </section>
    </div>
  )
}

function DisplayParts({prod}) {
  return (
    <div className='flex outline-dashed justify-evenly overflow-x-scroll no-scrollbar my-5 p-2'>
      {prod.map((items) => {
        return (
          <div>
            <img src={items.img} className='h-100 w-100 max-h-10 max-w-xs'/>
            <p className='text-xs w-32'>{items.name}</p>
            <IconButton
              isRound={true} 
              variant='solid'
              colorScheme='teal'
              aria-label='add item'
              fontSize={{base: 'xs'}}
              size={{base: 'xs', md:'md'}}
              icon={<AiOutlinePlus />}
              className='relative top-1'
            />
          </div>
        )
      })}
    </div>
  )
}
