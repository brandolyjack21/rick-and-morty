import React from 'react';
import '../components/characterrandom.css'

const CharacterRandom = ({ randomCharacter }) => {

    return (
        <div className='container__character'>
            <div className='name div'>
                <p className='title'>Nombre:</p>
                <p>{randomCharacter.name}</p>
            </div>
            <div className='type div'>
                <p className='title'>Tipo:</p>
                <p>{randomCharacter.type}</p>
            </div>
            <div className='dimension div'>
                <p className='title'>Dimensión:</p>
                <p>{randomCharacter.dimension}</p>
            </div>
            <div className='residents div'>
                <p className='title'>Población:</p>
                <p>{randomCharacter.residents?.length}</p>
            </div>
        </div>
    );
};

export default CharacterRandom;