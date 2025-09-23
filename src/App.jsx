
import { Suspense } from 'react'
import './App.css'


import AvailablePlayer from './components/AvailablePlayer'
import Navbar from './components/Navbar'
import SelectedPlayers from './components/SelectedPlayers'


const fetchPlayers = async ()=>{
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

  const playerPromise = fetchPlayers()

  return (
    <div className='max-w-[1200px] mx-auto' >
      <Navbar></Navbar>
      <div className='flex justify-between items-center pt-15 pb-10' >
        <h1 className='text-2xl font-bold ' >Available Players</h1>
        <div  >
          <button class="btn btn-success rounded-r-none ">Availavle</button>
          <button class="btn btn-success rounded-l-none">Selected</button>
        </div>
      </div>
      <Suspense fallback = {<span class="loading loading-dots loading-xl"></span> } >
        <AvailablePlayer playerPromise = {playerPromise} ></AvailablePlayer>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </div>
  )
}

export default App
