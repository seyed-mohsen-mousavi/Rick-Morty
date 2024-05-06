import {
  ArrowUpCircleIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/20/solid";

function CharacterDetail({ characterSelect }) {
  return (
    <div style={{ flex: 1 }}>
      {characterSelect ? (
        <div>
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
                <button className="btn btn--primary">Add To Favourite </button>
              </div>
            </div>
          </div>
          <div className="character-episodes">
            <div className="title">
              <h2>List of Episodes</h2>
              <button>
                <ArrowUpCircleIcon className="icon " />
              </button>
            </div>
            <ul>
              {/* {characterSelect.episode.map((item, index) => (
                <li key={item.id}>
                  <div className="">
                    {(index + 1).toString().padStart(2, "0")} {item.episode} :{" "}
                    <strong>{item.name}</strong>
                  </div>
                  <div className="badge badge--secondary">{item.air_date}</div>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      ) : (
        <div className="alert">
          <div className="select">
            <p className="name">Please Select a character.</p>{" "}
            <CursorArrowRaysIcon />
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterDetail;
