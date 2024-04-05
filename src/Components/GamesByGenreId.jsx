import React from 'react'
import { Link } from 'react-router-dom'

function GamesByGenreId({gameList, selectedGenreName}) {
  return (
    <div>
        <h2 className='font-bold text-[30px] text-white mt-16'>{selectedGenreName} Games</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-5'>
          
          {gameList.map((item)=>(
            <Link to={`games/${item.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className='bg-neutral-900 p-3 rounded-lg pb-16 h-full hover:scale-110 transition-all ease-out duration-200 cursor-pointer'>
                    <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover'/>
                    <h2 className='text-[20px] font-bold'>{item.name}<span className='bg-green-200 text-green-700 ml-2 p-1 rounded-sm text-[10px]'>{item.metacritic}</span></h2>
                    <h2 className='text-gray-400'>⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}</h2>    
                </div>
                </Link>    
          ))}
            
            
        </div>
    </div>
  )
}

export default GamesByGenreId