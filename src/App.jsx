import { useState, useEffect } from "react";

function App() {
  const [shuffledData, setShuffledData] = useState([]);
  const [pokemonImages, setPokemonImages] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=150")
      .then((response) => response.json())
      .then((data) => {
        const pokemonList = shuffleArray(data.results);
        setShuffledData(pokemonList);
        fetchPokemonImages(pokemonList);
      });
  }, []);

  const fetchPokemonImages = (pokemonList) => {
    pokemonList.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {
          setPokemonImages((prevImages) => ({
            ...prevImages,
            [pokemon.name]: pokemonData.sprites.front_default,
          }));
        });
    });
  };

  const handleShuffle = () => {
    setShuffledData(shuffleArray(shuffledData));
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <>
      {shuffledData && (
        <div className="container">
          {shuffledData.map((item) => {
            return (
              <div key={item.name} className="pokemon" onClick={handleShuffle}>
                <img src={pokemonImages[item.name]} alt={item.name} />
                <h1> {item.name} </h1>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
