import React, { useState } from 'react';
import userImg from "../assets/Group.png";
import flag from "../assets/flag.png";
import AvailablePlayer from './AvailablePlayer';

const PlayerCard = ({ player,setBalance,availableBalance }) => {
  const [isSelected, setSelected] = useState(false);
  const playerPrice = player["price"].split("USD").join("").split(",").join("") ;

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <div className="w-full h-[200px]">
          <img src={player["player-image"]} alt={player["player-name"]} />
        </div>
      </figure>
      <div className="card-body px-2 py-4">
        <div className="flex items-center gap-2">
          <img src={userImg} alt="" className="h-[15px] w-[15px]" />
          <h2 className="card-title">{player["player-name"]}</h2>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={flag} alt="" className="h-3" />
            <span>{player["player-country"]}</span>
          </div>
          <button className="px-3 rounded-lg border border-gray-300 bg-gray-200 text-black">
            {player["playing-role"]}
          </button>
        </div>

        <div className="w-full text-gray-300">
          <hr />
        </div>

        <div className="flex justify-between items-center font-semibold">
          <h3>Rating:</h3>
          <span>{player["rating"]}</span>
        </div>

        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{player["batting-style"]}</h3>
          <span className="text-gray-400">{player["bowling-style"]}</span>
        </div>

        <div className="flex justify-between items-center text-black">
          <h3 className="font-semibold">
            Price: <span className="text-gray-500">{player["price"]}</span>
          </h3>
          <button
          
            disabled={isSelected}
            onClick={() => {
                if(availableBalance<playerPrice){
                    alert("not enough Balance")
                    return
                }
                setSelected(true)
                setBalance(availableBalance-playerPrice)
            }}
            className="px-3 rounded-lg border border-gray-300 bg-gray-200"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
