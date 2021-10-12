import { useState } from "react";
import axios from "axios";

import s from "./UserForm.module.css";

export default function UserForm() {
  // const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //   const [avatar, setAvatar] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;

      case "lastName":
        setLastName(event.target.value);
        break;

      case "email":
        setEmail(event.target.value);
        break;

      //   case "avatar":
      //     setAvatar(event.target.value);
      //     break;

      default:
        return;
    }
  };

  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  // const reset = () => {
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   // setAvatar('');
  // };

  const btnClick = (e) => {
    // e.preventDefault();

    axios
      .post("https://dummyapi.io/data/v1/user/create", user, {
        headers: {
          "app-id": "6154537832884b1a024b2f3c",
          "Content-Type": "application/json",
        },
      })
      .then((err) => console.log(err))
      .then(console.log(user));
  };
  // reset();

  return (
    <>
      <form autoComplete="off" className={s.form}>
        <label className={s.title}>
          First Name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            className={s.input}
          ></input>
        </label>
        <label className={s.title}>
          Last Name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            className={s.input}
          ></input>
        </label>
        <label className={s.title}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.input}
          ></input>
        </label>
        <button type="submit" onClick={btnClick} className={s.button}>
          Add User
        </button>
      </form>
    </>
  );
}
