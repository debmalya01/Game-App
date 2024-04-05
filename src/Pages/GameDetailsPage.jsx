import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../assets/gaming_5087379.png';

function GameDetailsPage() {
  const [gameDetails, setGameDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getGameDetails();
  }, []);

  const getGameDetails = () => {
    fetch(`https://api.rawg.io/api/games/${id}?key=a8423dfc178949e6aa584ac0edf3276c`)
      .then(res => res.json())
      .then(data => setGameDetails(data))
      // .then(data => console.log(data))
      .catch(error => console.error('Error fetching game details:', error));
  };

  return (
    <div className='bg-gradient-to-t from-black to-neutral-800'>
      <nav className='bg-black px-5 flex justify-center items-center'>
        <img src={logo} alt="logo" className='w-20 ml-2 mr-2 ' />
        <div className='font-bold text-3xl  text-slate-300'>GameR.</div>
      </nav>
      {gameDetails && (
        <div className='pt-11 pb-4'>
          <div className='flex w-full justify-between px-11'>
            <div className="left w-1/2">
              <div className='text-6xl font-bold'>{gameDetails.name}</div>

              <div className='text-lg font-light mt-3'>Release Date : {gameDetails.released}</div>

              {gameDetails.developers && (
                <div className='text-2xl font-semibold mt-3 flex '><div className='mr-2'>Developer :</div> <ul>
                  {gameDetails.developers.map(developer => (
                    <li key={developer.id}>
                      {developer.name}
                    </li>
                  ))}
                </ul>
                </div>
              )}

              <div className='text-3xl font-bold mt-4'>About:</div>
              <div className='text-lg mt-2'>{gameDetails.description.split('<br>')[0].replace(/<[^>]+>/g, '')}</div>
            </div>

            <div className="right ">
              <div className='relative'>
                <img src={gameDetails.background_image} className='w-[600px] h-[400px] object-cover rounded-2xl' alt="Game Background" />
                <div className='absolute p-8 w-full bottom-0 bg-gradient-to-t from-slate-900 to-transparent'>
                  <button className='cursor-pointer'>Get Now</button>
                </div>
              </div>
              <div className="mt-2">
                <h2 className='text-gray-400'>⭐{gameDetails.rating} 💬{gameDetails.reviews_count} 🔥{gameDetails.suggestions_count}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer className='w-full bg-neutral-950 text-center py-2 '>
        2024 - © Debmalya Saha - Powered by rawg.io
      </footer>
    </div>
  );
}

export default GameDetailsPage;
