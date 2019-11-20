import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Morties() {
    // TODO: Add useState to track data from useEffect
    const [characters, setCharacter]  = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const handleInputChange = event => {
      setQuery(event.target.value);
    };
  
    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Rick and Morty", response);
        setCharacter(characters);
      })
      .catch(error => {
        console.log('Server Error', error);
        setPage(page - 1);
      })
  
    }, [query, page]);
    
  
    return (
      <section className="character-list">
      <div className="character-list">
      <div>
          {characters.map((character, index) => (
              <h2>{character.name}</h2>
          ))}
      </div>
        </div>
      </section>
    );
  }