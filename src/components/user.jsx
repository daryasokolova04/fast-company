import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = ({ user, onDelete, onFavourites }) => {
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => {
          return <Quality key={quality._id} quality={quality} />;
        })}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <Bookmark
          bookmark={user.bookmark}
          id={user._id}
          onFavourites={onFavourites}
        />
      </td>
      <td>
        <span
          key={user._id}
          className="btn btn-danger"
          onClick={() => onDelete(user)}
        >
          delete
        </span>
      </td>
    </tr>
  );
};

export default User;
