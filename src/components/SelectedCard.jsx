import React from 'react';

const SelectedCard = ({ player,removePlayer }) => {


const    handleRemove = () =>{
    removePlayer(player)
} 
    return (
        <div className=' w-full mx-auto'>
            <div className='flex justify-between items-center p-4 border border-gray-400 rounded-xl'>
                <div className='flex items-center gap-2'>
                    <img src={player["player-image"]} className='h-[50px] w-[50px] rounded-xl object-cover' alt="" />
                    <div>
                        <h1>{player["player-name"]}</h1>
                        <h1 className='text-xs'>{player["batting-style"]}</h1>
                    </div>
                </div>

                <div onClick={handleRemove} className='cursor-pointer'>
                    ❌
                </div>
            </div>
        </div>

    );
};

export default SelectedCard;







