import React, { use } from 'react';
import PlayerCard from './playerCard';

const AvailablePlayer = ({ playerPromise, setBalance,availableBalance }) => {
    
    const playerData = use(playerPromise);

    return (
        <div className='max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-5 ' >

            {
                playerData.map(player=><PlayerCard availableBalance={availableBalance} setBalance={setBalance} player={player} ></PlayerCard>
                )
            }
            
            
        </div>
    );
};

export default AvailablePlayer;