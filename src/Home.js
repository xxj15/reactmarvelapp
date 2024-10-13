import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(
      "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="character-grid">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <Link to={`/character/${character.id}`}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className="character-image"
              />
              <p>{character.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
