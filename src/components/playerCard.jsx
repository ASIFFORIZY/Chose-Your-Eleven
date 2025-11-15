import React, { useState } from 'react';
import image from '../assets/Group.png';
import flag from '../assets/flag.png';

const PlayerCard = ({ player, setBalance, balance }) => {



  const playerPrice = player["price"].split("USD").join("").split(",").join("");

  const [isSelected, setIsSelected] = useState(false);

  const handChoseBtn = () => {
    if (balance < playerPrice) {
      alert("Not enough Balance");
      return;
    }

    setIsSelected(true);
    setBalance(balance - playerPrice);
  };

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

      <div className="card-body">

        <div className="flex gap-2 items-center">
          <img className="w-4 h-4" src={image} alt="icon" />
          <h2 className="card-title text-lg font-semibold">{player["player-name"]}</h2>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <img className="w-4 h-4" src={flag} alt="flag" />
            <p className="text-sm text-gray-600">{player['player-country']}</p>
          </div>
          <button className=" border border-gray-200 rounded-sm px-3 py-1 text-sm capitalize">
            {player["playing-role"]}
          </button>
        </div>

        <hr className="my-2 border-gray-200" />

        <div className="mt-2">
          <h1 className="font-medium mb-1">Ratings</h1>
          <div className="flex justify-between text-sm text-gray-600">
            <span className=''>{player["batting-style"]}</span>
            <span className='' >{player["bowling-style"]}</span>
          </div>
        </div>

        <div className="card-actions justify-between items-center mt-3">
          <h2 className="text-sm font-semibold ">Price: $ {player["price"]}</h2>
          <button disabled={isSelected} onClick={handChoseBtn} className=" border border-gray-200 rounded-sm px-3 py-1 text-sm capitalize" >{isSelected ? "Selected" : "Chose player"}</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
