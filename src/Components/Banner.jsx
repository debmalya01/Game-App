import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(()=>{
        
    },[])
  return (
    <div className='mt-2 relative'>
        <div className='absolute p-8 w-full bottom-0 bg-gradient-to-t from-slate-900 to-transparent'>
          <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
          <button>Get Now</button>
        </div>
        <img src={gameBanner.background_image} alt="" 
        className='md:h-[400px] w-full object-cover rounded-xl'/>
    </div>
  )
}

export default Banner