import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ numOfcharacters }) {
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
      </div>
      <div className="navbar__result">Find {numOfcharacters} Characters</div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">1</span>
      </button>
    </nav>
  );
}

export default Navbar;
