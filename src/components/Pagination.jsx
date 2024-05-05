import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

function Pagination({ allCharacters, page, setPage, setCharacters }) {
  const row = 4;
  useEffect(() => {
    setCharacters(allCharacters.slice(page * row - row, page * row));
  }, [page]);
  const clickHanle = (np) => {
    if (np) {
      if (allCharacters.length / 4) {
        setPage((p) => (p < allCharacters.length / 4 ? (p = p + 1) : p));
      }
    } else {
      setPage((p) => (p > 1 ? (p = p - 1) : p));
    }
  };
  return (
    <div>
      <div className="pagination:container">
        <div
          className={`pagination:number arrow ${
            page > 1 ? "pagination:active" : ""
          }`}
          onClick={() => clickHanle(false)}
        >
          <ArrowLeftIcon />
          <span className="arrow:text">Previous Page</span>
        </div>

        <div
          className={`pagination:number arrow ${
            page === allCharacters.length / 4 ? "" : "pagination:active"
          }`}
          onClick={() => clickHanle(true)}
        >
          <span className="arrow:text">Next Page</span>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default Pagination;

function Page() {}
