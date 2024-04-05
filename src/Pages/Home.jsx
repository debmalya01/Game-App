import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList';
import GlobalApi from '../Services/GlobalApi';
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenreId from '../Components/GamesByGenreId';

function Home() {
    const [allGamesList, setAllGamesList] = useState();
    const [gameListByGenres, setGameListByGenres] = useState([]);
    const [selectedGenresName, setSelectedGenreName] = useState('Action');

    useEffect(()=>{
        getAllGamesList();
        getGameListByGenreId(4);
    },[])

    

    const getAllGamesList = () =>{
        GlobalApi.getAllGames.then((res)=>{
            setAllGamesList(res.data.results)
            
        })
    } 

    const getGameListByGenreId =(id)=>{
        GlobalApi.getGameListByGenreId(id).then((res)=>{
            console.log(res.data.results)
            setGameListByGenres(res.data.results)
        })
    }
    return(
        <>
        <div className='grid grid-cols-4 px-8'>
            <div className='hidden md:block'>
                <GenreList genreId={(genreId)=> getGameListByGenreId(genreId)}
                selectedGenreName={(name)=>setSelectedGenreName(name)}
                />
            </div>
            <div className=' col-span-4 md:col-span-3'>
                {allGamesList?.length>0&&gameListByGenres.length>0 ?
                    <div>
                        <Banner gameBanner={allGamesList[Math.floor(Math.random()*allGamesList?.length)]}/> 
                        <TrendingGames gameList={allGamesList} />
                        <GamesByGenreId gameList={gameListByGenres} selectedGenreName={selectedGenresName}/>
                    </div>
                : null}
            </div>
        </div>
        <footer className='h-10 flex justify-center items-center'>
        2024 - © Debmalya Saha - Powered by rawg.io
      </footer>
      </>
    )
}
export default Home;

