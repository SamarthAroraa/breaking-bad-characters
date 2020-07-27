import React from "react";
import spinner from "../../../assets/images/spinner.gif";
import Character from "../character_item/character_item.component";
import "./character_grid.styles.scss";
import CharacterItem from "../character_item/character_item.component";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <img className="spinner" src={spinner} alt="loading..." />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem item={item} key={item.char_id} />
      ))}
    </section>
  );
};

export default CharacterGrid;
