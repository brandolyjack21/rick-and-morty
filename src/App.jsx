import { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterRandom from './components/CharacterRandom'
import ResidentInfo from './components/ResidentInfo'
import logosvg from '../public/logo.svg'
import './App.css'

function App() {
  const [randomCharacter, setRandomCharacter] = useState({})
  const [characterCard, setCharacterCard] = useState({})
  const [characters, setCharacters] = useState([])
  const [characterLocation, setCharacterLocation] = useState('')
  console.log(characterLocation, 'lololololo');

 useEffect(() => {
  axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * 126)}`)
       .then(res => setRandomCharacter(res.data))
       .catch(error  => console.error(error))
},[])

useEffect(() => {
  charactersInfo()
},[characterLocation])

const charactersInfo = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${characterLocation}`)
       .then(res => setRandomCharacter(res.data))
       .catch(error  => console.error(error))
}
  return (
    <div className='app'>
      <header className='header'>
        <img src={logosvg} alt=""  className='logo'/>
      </header>
      <main className='main'>
        
        <CharacterRandom
        randomCharacter={randomCharacter}
        />
        
        <div className='buscador'>
          <input type="text" 
          placeholder='buscar...'
          className='input--search'
          value={characterLocation}
          onChange={e => setCharacterLocation(e.target.value)}
          />
          <button 
          className='search'
          onClick={() => charactersInfo()}
          >Search</button>
        </div>

        <ul className='container-cards'>
          { randomCharacter.residents?.map(api => (
            <li className='cards-style'>
              <ResidentInfo
            api={api}
            />
            </li>
          )) }
        </ul> 
        
        
      </main>
    </div>
  )
}

export default App
