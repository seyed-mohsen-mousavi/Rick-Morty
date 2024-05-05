import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Navbar({ characters, setCharacterSelect }) {
  const [isFocus, setisFocus] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo ❤️‍🔥</div>
      <div className="inpt">
        <input
          type="search"
          className="text-field"
          onClick={() => setisFocus(!isFocus)}
          onBlur={() => setisFocus(!isFocus)}
          placeholder="search ..."
        />
        <div className={isFocus ? "" : "hidden"}>
          <h4># Popular </h4>
          {characters.map((item) => {
            return (
              <button
                className="popular__btn"
                key={item.id}
                onClick={() => setCharacterSelect(item)}
              >
                {item.gender === "Male" ? "👨" : "👧"} {item.name}
                <span className={item.status === "Dead" ? "red" : "green"}>
                  {item.species}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="navbar__result">Find {characters.length} Characters</div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">1</span>
      </button>
    </nav>
  );
}

export default Navbar;
