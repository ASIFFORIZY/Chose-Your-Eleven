import React, { use } from 'react';
import PlayerCard from './playerCard';


const AvailablePlayer = ({fetchPlayers, setBalance,balance,setBuyPlayer , buyPlayer }) => {
    const players = use(fetchPlayers );
    return (
        <div className="navbar  max-w-[1200px] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
                players.map(player=> (<PlayerCard  buyPlayer={ buyPlayer} setBuyPlayer={setBuyPlayer} balance={balance}  setBalance={ setBalance} player={player} ></PlayerCard>))
            }
        </div>
    );
};

export default AvailablePlayer;