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
  const [characterName, setCharacterName] = useState('')
  console.log(characterName, 'lololololo');

 useEffect(() => {
  axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * 126)}`)
       .then(res => setRandomCharacter(res.data))
       .catch(error  => console.error(error))
},[])

useEffect(() => {
  charactersInfo()
},[])

const charactersInfo = () => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
       .then(res => setCharacters(res.data.results))
       .catch(error  => console.error(error))

}


console.log(characterCard, 'ya llegue')
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
          placeholder='buscar personaje...'
          className='input--search'
          value={characterName}
          onChange={e => setCharacterName(e.target.value)}
          />
          <button 
          className='search'
          onClick={() => charactersInfo()}
          >Search</button>
        </div>
        
        <ResidentInfo
        characters={characters}
        />
      </main>
    </div>
  )
}

export default App
