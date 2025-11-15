import React from 'react';
import image from '../assets/Group.png';
import flag from '../assets/flag.png';

const PlayerCard = ({ player }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-5">
      {/* Image section */}
      <figure className="h-56 w-full overflow-hidden rounded-md">
        <img
          src={player["player-image"]}
          alt={player["player-name"]}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card body */}
      <div className="card-body">
        {/* Player name + icon */}
        <div className="flex gap-2 items-center">
          <img className="w-4 h-4" src={image} alt="icon" />
          <h2 className="card-title text-lg font-semibold">{player["player-name"]}</h2>
        </div>

        {/* Country + role */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <img className="w-4 h-4" src={flag} alt="flag" />
            <p className="text-sm text-gray-600">{player['player-country']}</p>
          </div>
          <button className="bg-gray-50 border border-gray-200 rounded-sm px-3 py-1 text-sm capitalize">
            {player["playing-role"]}
          </button>
        </div>

        <hr className="my-2 border-gray-200" />

        {/* Ratings section */}
        <div className="mt-2">
          <h1 className="font-medium mb-1">Ratings</h1>
          <div className="flex justify-between text-sm text-gray-600">
            <span className='text-gray-900'>{player["batting-style"] }</span>
            <span className='text-gray-400' >{player["bowling-style"] }</span>
          </div>
        </div>

        {/* Price and tag */}
        <div className="card-actions justify-between items-center mt-3">
          <h2 className="text-sm font-semibold ">Price: $ {player["price"]}</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-sm px-3 py-1 text-sm capitalize">Chose Player</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
