import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Navbar, { Favouarites, Search, SearchResult } from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Pagination from "./components/Pagination";
import Github from "./components/Github";
import useCharacters from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [query, setQuery] = useState("");
  const [isLoading, allCharacters, characters, setCharacters] = useCharacters(
    "https://rickandmortyapi.com/api/character/?name",
    query
  );
  const [characterSelect, setCharacterSelect] = useState();
  const [favourite, setFavourite] = useLocalStorage("FAVOURITE");
  // pagination
  const [page, setPage] = useState(1);
  const row = 4;
  useEffect(() => {
    setCharacters(allCharacters.slice(page * row - row, page * row));
  }, [page, allCharacters]);

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
