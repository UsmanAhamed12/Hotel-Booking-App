import React from 'react'
import { roomCommonData } from '../assets/assets'
import HostedBy from './HostedBy'

const CmnRoomSpec = () => {
  return (
    <div >
        <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec, index) => (
            <div key={index} className='flex items-start gap-2'>
                <img src={spec.icon} alt={`${spec.title}-icon`} />
                <div>
                    <p className='text-base'>{spec.title}</p>
                    <p className='text-gray-500'>{spec.description}</p>
                </div>
            </div>
        ))}
        </div>
        <div>
            <p className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
            </p>
        </div>

        {/* Hosted By */}
        

    </div>
    
  )
}

export default CmnRoomSpec