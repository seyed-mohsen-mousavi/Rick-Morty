import { EyeIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";

function CharacterList({
  characters,
  isLoading,
  setCharacterSelect,
  children,
}) {
  if (isLoading) {
    return (
      <div className="characters-list">
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="characters-list">
        {characters.map((item) => (
          <Character
            key={item.id}
            item={item}
            setCharacterSelect={setCharacterSelect}
          />
        ))}
        {characters.length > 0 ? children : ""}
      </div>
    );
  }
}

export default CharacterList;

function Character({ item, setCharacterSelect }) {
  return (
    <div
      className="list__item"
      onClick={() => {
        setCharacterSelect(item);
        scrollTo(0, 0);
      }}
    >
      <img src={item.image} alt={item.name} />
      <h3 className="name">
        <span>{item.gender === "Male" ? "👨" : "👧"}</span>
        <span> {item.name}</span>
      </h3>
      <div className="list-item__info info">
        <span
          className={`status ${item.status === "Dead" ? "red" : ""}`}
        ></span>
        <span> {item.status}</span>
        <span> - {item.species}</span>
      </div>
      <button className="icon red">
        <EyeIcon />
      </button>
    </div>
  );
}
