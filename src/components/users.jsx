import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user";

const Users = ({ users, onDelete, onFavourites }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Количество встреч</th>
            <th>Оценка</th>
            <th>Избранное</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <User
                key={user._id}
                user={user}
                onDelete={onDelete}
                onFavourites={onFavourites}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
