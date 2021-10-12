import { useState } from "react";
import axios from "axios";

import s from "./UserForm.module.css";

export default function UserForm({ onClick }) {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const radioChange = (event) => {
    switch (event.target.id) {
      case "mr":
        setTitle(event.target.value);
        break;

      case "mrs":
        setTitle(event.target.value);
        break;

      case "ms":
        setTitle(event.target.value);
        break;

      case "miss":
        setTitle(event.target.value);
        break;

      case "dr":
        setTitle(event.target.value);
        break;

      default:
        return;
    }
  };

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

      case "avatar":
        setAvatar(event.target.value);
        break;

      default:
        return;
    }
  };

  const user = {
    title: title,
    firstName: firstName,
    lastName: lastName,
    email: email,
    picture: avatar,
  };

  const btnClick = (e) => {
    e.preventDefault();

    axios
      .post("https://dummyapi.io/data/v1/user/create", user, {
        headers: {
          "app-id": "6154537832884b1a024b2f3c",
          "Content-Type": "application/json",
        },
      })
      .then((err) => console.log(err))
      .then(onClick(user))
      .then(console.log(user));
    reset();
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAvatar("");
    setTitle("");
  };

  return (
    <>
      <form autoComplete="off" className={s.form}>
        <label>
          Title
          <input
            type="radio"
            checked
            name="title"
            value="mr"
            id="mr"
            onChange={radioChange}
          />
          <label for="mr">mr</label>
          <input
            type="radio"
            name="title"
            value="mrs"
            id="mrs"
            onChange={radioChange}
          />
          <label for="mrs">mrs</label>
          <input
            type="radio"
            name="title"
            value="ms"
            id="ms"
            onChange={radioChange}
          />
          <label for="ms">ms</label>
          <input
            type="radio"
            name="title"
            value="miss"
            id="miss"
            onChange={radioChange}
          />
          <label for="miss">miss</label>
          <input
            type="radio"
            name="title"
            value="dr"
            id="dr"
            onChange={radioChange}
          />
          <label for="dr">dr</label>
        </label>
        <label className={s.title}>
          First Name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            className={s.input}
            required
          ></input>
        </label>
        <label className={s.title}>
          Last Name
          <input
            required
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
            required
          ></input>
        </label>
        <label className={s.title}>
          Avatar
          <input
            type="text"
            name="avatar"
            value={avatar}
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
