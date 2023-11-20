import Phrase from "./components/phrase";
import Users from "./components/users";
import api from "./api";
import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (user) => {
    setUsers((prevState) =>
      prevState.filter((item) => {
        return item._id !== user._id;
      })
    );
  };

  const handleFavourites = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          user.bookmark = !user.bookmark;
        }
        return user;
      })
    );
  };

  if (users.length !== 0) {
    return (
      <div>
        <Phrase length={users.length} />
        <Users
          users={users}
          onDelete={handleDelete}
          onFavourites={handleFavourites}
        />
      </div>
    );
  }
  return <Phrase length={users.length} />;
};

export default App;
