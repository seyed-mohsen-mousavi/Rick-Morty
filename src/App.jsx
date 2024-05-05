import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [characterSelect, setCharacterSelect] = useState();
  useEffect(() => {
    async function startFetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(data.results.slice(0, 5));
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    startFetchData();
  }, []);
  console.log(characterSelect);
  return (
    <div className="app">
      <Toaster />
      <Navbar characters={characters} setCharacterSelect={setCharacterSelect} />
      <div className="main">
        <CharacterList
          characters={characters}
          isLoading={isLoading}
          setCharacterSelect={setCharacterSelect}
        />
        <CharacterDetail characterSelect={characterSelect} />
      </div>
    </div>
  );
}
export default App;
