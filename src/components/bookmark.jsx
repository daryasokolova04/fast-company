import React from "react";

const Bookmark = ({ bookmark, id, onFavourites }) => {
  return (
    <button onClick={() => onFavourites(id)}>
      <i className={"bi bi-heart" + (bookmark === false ? "" : "-fill")}></i>
    </button>
  );
};

export default Bookmark;
