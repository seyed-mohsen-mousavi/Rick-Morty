import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Navbar, { Favouarites, Search, SearchResult } from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Pagination from "./components/Pagination";
import Github from "./components/Github";
import Modal from "./components/Modal";
function App() {
  //
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [characterSelect, setCharacterSelect] = useState();
  const [favourite, setFavourite] = useState(
    () => JSON.parse(localStorage.getItem("FAVOURITE")) || []
  );
  //
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const row = 4;
  //
  // pagination
  useEffect(() => {
    setCharacters(allCharacters.slice(page * row - row, page * row));
  }, [page, allCharacters]);
  // fetch data (axios)
  useEffect(() => {
    async function startFetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setAllCharacters(data.results);
      } catch (err) {
        toast.error(err.response.data.error);
        setCharacters([]);
        setAllCharacters([]);
      } finally {
        setIsLoading(false);
      }
    }
    startFetchData();
  }, [query]);
  // set To localStroage
  useEffect(() => {
    localStorage.setItem("FAVOURITE", JSON.stringify(favourite));
  }, [favourite]);
  return (
    <div className="app">
      <Toaster />
      <Navbar>
        <Search
          query={query}
          setQuery={setQuery}
          setCharacterSelect={setCharacterSelect}
        />
        <SearchResult numOfcharacters={allCharacters.length} />
        <Favouarites
          favourites={favourite}
          setFavourites={setFavourite}
          setCharacterSelect={setCharacterSelect}
          characterSelect={characterSelect}
        />
      </Navbar>
      <Main>
        <CharacterList
          characters={characters}
          isLoading={isLoading}
          setCharacterSelect={setCharacterSelect}
          characterSelect={characterSelect}
        >
          <Pagination
            allCharacters={allCharacters}
            page={page}
            setPage={setPage}
            setCharacters={setCharacters}
          />
        </CharacterList>
        <CharacterDetail
          characterSelect={characterSelect}
          setFavourite={setFavourite}
          favourite={favourite}
        />
      </Main>
      <Github />
    </div>
  );
}
export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
