import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Characters } from './components/Characters'
import { InfoCharacters } from './components/InfoCharacters'
import { Films } from './components/Films'
import { InfoFilms } from './components/InfoFilms'
import { Filters } from './components/Filters'
import { NavBar } from './components/NavBar'
import { Error404 } from './components/Error404'
import { Starships } from './components/Starships'
import { InfoStarships } from './components/InfoStarships'
import { GlobalProvider } from './context/globalContext'
import { Vehicles } from './components/Vehicles'
import { InfoVehicles } from './components/InfoVehicles'
import { Species } from './components/Species'
import { InfoSpecies } from './components/InfoSpecies'
import { Planets } from './components/Planets'
import { InfoPlanets } from './components/InfoPlanets'

function App () {
  return (
    <>
      <h1>STARWARS</h1>
      <NavBar/>
      <GlobalProvider>
        <Filters/>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/characters" element={<Characters/>} />
          <Route path="/characters/info" element={<InfoCharacters/>} />
          <Route path="/films" element={<Films/>} />
          <Route path="/films/info" element={<InfoFilms/>} />
          <Route path="/starships" element={<Starships/>} />
          <Route path="/starships/info" element={<InfoStarships/>} />
          <Route path="/vehicles" element={<Vehicles/>} />
          <Route path="/vehicles/info" element={<InfoVehicles/>} />
          <Route path="/species" element={<Species/>} />
          <Route path="/species/info" element={<InfoSpecies/>} />
          <Route path="/planets" element={<Planets/>} />
          <Route path="/planets/info" element={<InfoPlanets/>} />
          <Route path="/404" element={<Error404/>} />
        </Routes>
      </GlobalProvider>
    </>
  )
}

export default App
