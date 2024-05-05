import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Pagination from "./components/Pagination";
function App() {
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [characterSelect, setCharacterSelect] = useState();
  useEffect(() => {
    async function startFetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setAllCharacters(data.results);
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    startFetchData();
  }, []);
  return (
    <div className="app">
      <Toaster />
      <Navbar numOfcharacters={allCharacters.length} />
      <div className="main">
        <CharacterList
          characters={characters}
          isLoading={isLoading}
          setCharacterSelect={setCharacterSelect}
        >
          <Pagination
            allCharacters={allCharacters}
            page={page}
            setPage={setPage}
            setCharacters={setCharacters}
          />
        </CharacterList>
        <CharacterDetail characterSelect={characterSelect} />
      </div>
    </div>
  );
}
export default App;
