
import { Suspense, useState } from 'react'
import './App.css'
import SelectedPlayer from "./components/SelectedPlayers"


import AvailablePlayer from './components/AvailablePlayer'
import Navbar from './components/Navbar'



const fetchPlayers = async ()=>{
  const res = await fetch("/players.json")
  return res.json()
}

const playerPromise = fetchPlayers()

function App() {

  const [toggle,setToggle] = useState(true)
  const [availableBalance,setBalance]= useState(600000000)

  

  return (
    <div className='max-w-[1200px] mx-auto' >
      <Navbar availableBalance={availableBalance} ></Navbar>
      <div className='flex  lg:justify-between items-center pt-15 pb-10 gap-5 ' >
        <h1 className='text-2xl font-bold ' >Available Players</h1>
        <div className='font-semibold' >
          <button onClick={()=>setToggle(true)} class={` py-3 lg:px-4 px-3 border-1 border-gray-400 rounded-l-lg border-r-0 ${toggle===true? "bg-[#cfe22c]":""}`} >Available</button>
          <button onClick={()=>setToggle(false)}class={` py-3 lg:px-4 px-2 border-1 border-gray-400 rounded-r-lg border-l-0 ${toggle===false? "bg-[#cfe22c]":""}`}>Selected (0)</button>
        </div>
      </div>

      {
        toggle === true?<Suspense fallback = {<span class="loading loading-dots loading-xl"></span> } >
        <AvailablePlayer availableBalance={availableBalance} setBalance={setBalance} playerPromise = {playerPromise} ></AvailablePlayer>
      </Suspense>:<SelectedPlayer></SelectedPlayer>
      }
      
      
    </div>
  )
}

export default App
