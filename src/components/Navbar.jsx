import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import { Character } from "./CharacterList";
import toast from "react-hot-toast";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />

      {children}
    </nav>
  );
}

export default Navbar;

function Logo() {
  return <div className="navbar__logo">Rich And Morty ❤️‍🔥</div>;
}

export function Search({ query, setQuery, setCharacterSelect }) {
  return (
    <input
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        setCharacterSelect();
      }}
      type="search"
      className="text-field"
      placeholder="search ..."
    />
  );
}

export function SearchResult({ numOfcharacters }) {
  return (
    <div className="navbar__result">
      Find{" "}
      <span style={{ color: "white", padding: "0 2px" }}>
        {numOfcharacters}
      </span>{" "}
      Characters
    </div>
  );
}

export function Favouarites({
  favourites,
  setFavourites,
  setCharacterSelect,
  characterSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal onOpen={setIsOpen} open={isOpen} title="List Of Favourites">
        {favourites.map((item) => (
          <Character
            key={item.id}
            item={item}
            setCharacterSelect={setCharacterSelect}
            characterSelect={characterSelect}
            onOpen={setIsOpen}
            open={open}
          >
            <TrashIcon
              onClick={(e) => {
                e.stopPropagation();
                toast.success("Deleted from Favourites  !");
                setFavourites(favourites.filter((c) => c.id !== item.id));
              }}
            />
          </Character>
        ))}
      </Modal>
      <button className="heart" onClick={() => setIsOpen((is) => !is)}>
        <HeartIcon className="icon" />
        <span className="badge">{favourites.length}</span>
      </button>
    </>
  );
}
