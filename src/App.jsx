import React, { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import AvailablePlayer from './components/AvailablePlayer'
import SelectedPlayers from './components/SelectedPlayers';


const fetchPlayers = fetch("/players.json")
  .then(res => res.json());

const App = () => {


  const [toggle, setToggle] = useState(true);


  

  return (
    <div>
      <Navbar></Navbar>
      <div className=' max-w-[1200px] mx-auto my-10 flex justify-between items-center'>
        <h1 className='lg:text-4xl font-bold' >Players </h1>
        <div  >
          <button onClick={()=> setToggle(true)} className={`btn ${ toggle? "btn-primary" : ""} `} >Available</button>
          <button onClick={()=> setToggle(false)} className={`btn ${ toggle === false? "btn-primary" : ""} `}  >Selected <span>0</span> </button>
        </div>
      </div>


      {
        toggle === true ? <Suspense fallback={<span class="loading loading-bars loading-xl"></span>} >
          <AvailablePlayer fetchPlayers={fetchPlayers}  ></AvailablePlayer>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
      }



    </div>
  );
};

export default App;