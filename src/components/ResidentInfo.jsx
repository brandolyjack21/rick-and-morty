import React from 'react';
import '../components/residentInfo.css'

const ResidentInfo = ({ characters }) => {
    console.log(characters)
    return (
        <div>
            <ul className='container__charactersCards'>
                {
                  characters?.map( character => (
                     <li key={character.id} className='card'>
                       <img src={character.image} alt="" />
                       <div className='container__card'>
                         <h1>{character.name}</h1>
                         <div className='live'>{character.status}
                         <div className='circule__status'></div>
                         </div>
                         <p>Origen: {character.origin?.name}</p>
                         <p>Apariciones: {character.episode?.length}</p>
                       </div>
                     </li>
                  ))
                }
            </ul>
        </div>
    );
};

export default ResidentInfo;