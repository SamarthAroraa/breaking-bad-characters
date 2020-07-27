import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/UI/header/header.component.jsx";
import SearchBar from "./components/UI/searchbar/searchbar.component";
import "./App.css";
import CharacterGrid from "./components/characters/character_grid/character_grid.component";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setIsLoading(false);
      setItems(result.data);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <SearchBar
        getQuery={(q) => {
          setQuery(q);
        }}
      />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
