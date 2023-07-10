import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setLoading(false);
        setError(false);
        setCharacters(response.data);
      })
      .catch(function (error) {
        // handle error
        setLoading(false);
        setError(error);
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {loading && <div>Loading...</div>}
      {error && (
        <div>
          Error: {error.code}
          {error.message}{" "}
        </div>
      )}

      {characters.length > 0 &&
        characters.map((character) => {
          return <div>{character.name}</div>;
        })}
    </div>
  );
};

export default App;
