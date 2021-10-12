import { useState, useEffect } from "react";
import UsersList from "./UsersList/UsersList";
import UserForm from "./UserForm/UserForm";

import s from "./App.module.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://dummyapi.io/data/v1/user?limit=10", {
      headers: {
        "app-id": "6154537832884b1a024b2f3c",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((users) => {
        setUsers(users.data);
      });
  };

  const addUser = (user) => {
    const { title, firstName, lastName, email, picture } = user;

    if (firstName === "") {
      alert("Enter your name!");
    } else if (lastName === "") {
      alert("Enter your last name!");
    } else if (email === "") {
      alert("Enter your email address!");
    } else {
      const newUser = {
        title,
        firstName,
        lastName,
        email,
        picture,
      };
      setUsers((users) => [newUser, ...users]);
      setClick(false);
      alert(`Success! ${firstName} is added!`);
    }
  };

  const btnClick = () => {
    setClick(true);
  };
  return (
    <div className={s.box}>
      <button onClick={btnClick} className={s.button}>
        Add User
      </button>
      {click && <UserForm onClick={addUser} />}
      <UsersList users={users} />
    </div>
  );
}
