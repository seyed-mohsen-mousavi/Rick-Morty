import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />

      {children}
      <Favouarites />
    </nav>
  );
}

export default Navbar;

function Logo() {
  return <div className="navbar__logo">Logo ❤️‍🔥</div>;
}

export function Search({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="search"
      className="text-field"
      placeholder="search ..."
    />
  );
}

export function SearchResult({ numOfcharacters }) {
  return (
    <div className="navbar__result">Find <span style={{color:"white" , padding:"0 2px"}}>{numOfcharacters}</span> Characters</div>
  );
}

function Favouarites() {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">1</span>
    </button>
  );
}
