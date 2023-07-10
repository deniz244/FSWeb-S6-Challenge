// Karakter bileşeniniz buraya gelecek

import React, { useState } from "react";
import Accordeon from "./Accordeon";
/*function handleOpen(e) {
  const acc = e.target.parentNode;
  acc.classList.toggle("open");
}*/

const Karakter = (props) => {
  const { character, movies } = props;

  return (
    <Accordeon title={character.name}>
      <ul>
        <li>Height: {character.height}</li>
        <li>Mass: {character.mass}</li>
        <li>Hair Color: {character.hair_color}</li>
        <li>Skin Color: {character.skin_color}</li>
        <li>Eye Color: {character.eye_color}</li>
        <li>Birth Year: {character.birth_year}</li>
        <li>Gender: {character.gender}</li>
        <li>Appears in: {character.films.length} movies</li>
      </ul>
      {character.films.map((film) => {
        return (
          <Accordeon title={film}>
            <ul>
              {movies.map((movie) => {
                if (movie.title === film) {
                  return (
                    <>
                      <li>Episode: {" " + movie.episode_id}</li>
                      <li>Intro: {" " + movie.opening_crawl}</li>
                    </>
                  );
                }
              })}
            </ul>
          </Accordeon>
        );
      })}
    </Accordeon>
  );
};

export default Karakter;
