import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './residentinfo.css'

const ResidentInfo = ({ api }) => {
    const [character, setCharacter] = useState()

    useEffect(() => {
      axios.get(api)
           .then(res => setCharacter(res.data))
           .catch(error => console.error(error))
    },[])
    console.log(character,'character')
    return (
        <div className='container__charactersCards'>
           <div key={character?.id} className='card'>
             <img src={character?.image} alt="" />
             <div className='container__card'>
               <h1 className='h1-card'>{character?.name}</h1>
               <div className='live'>{character?.status}
               <div className='circule__status'></div>
               </div>
                <p>Origen: {character?.origin?.name}</p>
               <p>Apariciones: {character?.episode.length}</p> 
             </div>
           </div>
        </div>
    );
};

export default ResidentInfo;