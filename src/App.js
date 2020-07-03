import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //We cant use async directly on useEffect we have to use another function for it
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;