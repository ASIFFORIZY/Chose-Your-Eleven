import React, { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import AvailablePlayer from './components/AvailablePlayer'
import SelectedPlayers from './components/SelectedPlayers';


const fetchPlayers = fetch("/players.json")
  .then(res => res.json());

const App = () => {


  const [toggle, setToggle] = useState(true);
  const [balance , setBalance] = useState(600000000);
  const [buyPlayer , setBuyPlayer ] = useState([]);


const removePlayer = (p) => {
  const filterData = buyPlayer.filter(ply => ply["player-name"] !== p["player-name"]);
  setBuyPlayer(filterData);
  const playerPrice = Number(p["price"].replace("USD","").replace(/,/g,""));
  setBalance(balance + playerPrice);
}


  

  return (
    <div >
      <Navbar balance={balance} ></Navbar>
      <div className=' max-w-[1200px] mx-auto  flex justify-between items-center  my-6 px-4 sm:px-6'>
        <h1 className='lg:text-4xl font-bold' >Players </h1>
        <div  >
          <button onClick={()=> setToggle(true)} className={`btn ${ toggle? "btn-primary" : ""} `} >Available</button>
          <button onClick={()=> setToggle(false)} className={`btn ${ toggle === false? "btn-primary" : ""} `}  >Selected <span>({buyPlayer.length})</span> </button>
        </div>
      </div>


      {
        toggle === true ? <Suspense fallback={<span class="loading loading-bars loading-xl"></span>} >
          <AvailablePlayer setBuyPlayer={setBuyPlayer} buyPlayer={buyPlayer} balance={balance}  setBalance={ setBalance} fetchPlayers={fetchPlayers}  ></AvailablePlayer>
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} buyPlayer={buyPlayer}  ></SelectedPlayers>
      }



    </div>
  );
};

export default App;