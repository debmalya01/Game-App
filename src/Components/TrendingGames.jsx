import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function TrendingGames({gameList}) {
    useEffect(()=>{
        console.log(gameList)
    }, [])
  return (
    <div className='mt-5 hidden md:block'>
        <h2 className='font-bold text-[30px] text-white'>Trending Games</h2>
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {gameList.map((item,index)=>index<4&&(
          <Link to={`games/${item.id}`} style={{textDecoration:"none" , color:"white" }}>
            <div className='bg-neutral-900 rounded-lg h-full group
            hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer mt-5 '>
                    <img src={item.background_image} 
                    className='h-[270px] rounded-t-lg object-cover'/>
                    <h2 className='text-white text-[20px] font-bold p-2'>{item.name}</h2>
            </div>
          </Link>
             
            ))}
        </div>
    </div>
  )
}

export default TrendingGames