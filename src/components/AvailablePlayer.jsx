import React, { use } from 'react';
import userImg from "../assets/Group.png"
import flag from "../assets/flag.png"

const AvailablePlayer = ({ playerPromise }) => {
    
    const playerData = use(playerPromise);

    return (
        <div className='max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-5 ' >

            {
                playerData.map(player=>
                <div class="card bg-base-100  shadow-sm p-4">
    <figure>
    <div className='w-full h-[200px]' ><img src={player["player-image"]} alt="sai sudarshan"  /></div>
     </figure>
    <div class="card-body px-2 py-4">
        <div className='flex items-center gap-2' >
        <img src={userImg} alt="" className='h-[15px] w-[15px]'/>
        <h2 class="card-title">{player["player-name"]}</h2>
    </div>

    <div className='flex justify-between items-center' >
        <div className='flex items-center gap-2 ' ><img src={flag} alt=""  className='h-3' /><span>{player["player-country"]}</span></div>
        <button class="px-3  rounded-lg border border-gray-300 bg-gray-200">{player["playing-role"]}</button>
        
    </div>
    <div className='w-full text-gray-300' ><hr /></div>

    
    <div className='flex justify-between items-center font-semibold' >
        <h3>Rating:</h3>
        <span>{player["rating"]}</span>
    </div>


    <div className='flex justify-between items-center ' >
        <h3 className='font-semibold' >{player["batting-style"]}</h3>
        <span className='text-gray-400' >{player["batting-style"]}</span>
    </div>

    <div className='flex justify-between items-center ' >
        <h3 className='font-semibold ' >Price: <span className='text-gray-500' >{player["price"]}</span></h3>
        <button class="px-3  rounded-lg border border-gray-300 bg-gray-200">Chose Player</button>
    </div>

  </div>
            </div>)
            }
            
            
        </div>
    );
};

export default AvailablePlayer;