import React from "react";
import { mockPokemonData } from "../mock/pokeData";

class PokeCard extends React.Component {
  render() {
    const {
      name = "",
      sprites: { front_default = "", front_shiny = "" } = {},
      video: videoLink = ""
    } = mockPokemonData;
    return (
      <div class="card">
        {front_default && (
          <img
            src={front_default}
            alt={`${name} front_default`}
            class="image"
          />
        )}
        {front_shiny && (
          <img src={front_shiny} alt={`${name} front_shiny`} class="image" />
        )}
        <h1 class="name"> {name} </h1>
        <a href={videoLink} target="blank" class="video-link">
          Watch it in action!
        </a>
      </div>
    );
  }
}

export default PokeCard;
