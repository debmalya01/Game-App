import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({genreId , selectedGenreName}) {

    const [genreList, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList = ()=>{
        GlobalApi.getGenreList.then((resp)=>{
            setGenreList(resp.data.results);
        }).catch(err=>{
            console.log(err);
        })
    }
  return (
    <div className='px-2'>
        <h2 className='text-[30px] font-bold text-white my-3'>Genre</h2>
        {genreList.map((item,index)=>(
            <div 
            onClick={()=>{setActiveIndex(index); genreId(item.id); selectedGenreName(item.name);}}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-neutral-900 p-2 rounded-xl group 
            ${activeIndex==index? "bg-neutral-900": null}`}>
                <img src={item.image_background} alt=""  className={`w-[40px] h-[40px] rounded-xl group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex==index? "scale-105": null}`}/>
                <h3 className={`text-[18px] text-white font-medium group-hover:font-bold transition-all ease-out duration-300 ${activeIndex==index? "font-bold": null}`}>{item.name}</h3>
            </div>
        ))} 
    </div>
  )
}

export default GenreList