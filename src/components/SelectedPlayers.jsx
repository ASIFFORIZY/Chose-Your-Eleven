import React from 'react';
import SelectedCard from './SelectedCard';

const SelectedPlayers = ({ buyPlayer ,removePlayer}) => {
    return (
        <div className="navbar shadow-sm max-w-[1200px] mx-auto flex-col gap-5">
            {
                    buyPlayer.map(player => <SelectedCard removePlayer={removePlayer} player={player} ></SelectedCard>)
                }
        </div>
    );
};

export default SelectedPlayers;