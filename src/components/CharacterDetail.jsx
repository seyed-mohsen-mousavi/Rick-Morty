import {
  ArrowUpCircleIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CharacterDetail({ characterSelect, setFavourite, favourite }) {
  const [episodes, setEpisodes] = useState([]);
  const isFav = characterSelect
    ? favourite.map((f) => f.id).includes(characterSelect.id)
    : false;
  useEffect(() => {
    if (characterSelect) {
      const episodesId = characterSelect.episode.map((e) =>
        e.split("/").at(-1)
      );
      const data = axios.get(
        `https://rickandmortyapi.com/api/episode/${episodesId}`
      );
      data.then((rs) => {
        setEpisodes([rs.data].flat().slice(0, 6));
      });
    }
  }, [characterSelect]);

  return (
    <div style={{ flex: 1 }}>
      {characterSelect ? (
        <div>
          <CharacterSubInfo
            characterSelect={characterSelect}
            isFav={isFav}
            setFavourite={setFavourite}
            favourite={favourite}
          />
          <CharacterEpisodeList episodes={episodes} />
        </div>
      ) : (
        <AlertWarn />
      )}
    </div>
  );
}

export default CharacterDetail;

function AlertWarn() {
  <div className="alert">
    <div className="select">
      <p className="name">Please Select a character.</p> <CursorArrowRaysIcon />
    </div>
  </div>;
}

function CharacterSubInfo({ characterSelect, isFav, setFavourite, favourite }) {
  return (
    <div className="character-detail">
      <img
        src={characterSelect.image}
        alt={characterSelect.name}
        className="character-detail__img"
      />
      <div className="character-detail__info">
        <h3 className="name">
          <span>{characterSelect.gender === "Male" ? "👨" : "👧"}</span>
          <span>{characterSelect.name}</span>
        </h3>
        <div className="info">
          <span
            className={`status ${
              characterSelect.status === "Dead" ? "red" : ""
            }`}
          ></span>
          <span> {characterSelect.status}</span>
          <span>- {characterSelect.species}</span>
        </div>
        <div className="location">
          <p>Last Known location : </p>
          <p>{characterSelect.location.name}</p>
        </div>
        <div className="actions">
          {isFav ? (
            <p>Allready Added To Favourites 💪</p>
          ) : (
            <button
              className="btn btn--primary"
              onClick={() => {
                setFavourite([...favourite, characterSelect]);
                toast.success("Added To Favourite  !");
              }}
            >
              Add To Favourite{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
function CharacterEpisodeList({ episodes }) {
  // earliest
  const [sort, setSort] = useState(true);
  let sortedEpisode;
  if (sort) {
    sortedEpisode = [...episodes].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sortedEpisode = [...episodes].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }
  return (
    <div className="character-episodes">
      <div className="title">
        <h2>List of Episodes</h2>
        <button onClick={() => setSort((is) => !is)}>
          <ArrowUpCircleIcon
            className="icon "
            style={{ rotate: sort ? "0deg" : "180deg" }}
          />
        </button>
      </div>
      <ul>
        {sortedEpisode.map((item, index) => (
          <li key={item.id}>
            <div className="">
              {(index + 1).toString().padStart(2, "0")} {item.episode} :{" "}
              <strong>{item.name}</strong>
            </div>
            <div className="badge badge--secondary">{item.air_date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
