import { useState, useEffect } from "react";
import UsersList from "./Components/UsersList/UsersList";
import UserForm from "./Components/UserForm/UserForm";

export default function App ()  {
  const [users, setUsers] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);


  // componentDidMount(){
  //   fetch("https://dummyapi.io/data/v1/user?limit=10", {
  //     headers: {
  //       "app-id": "6154537832884b1a024b2f3c",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((users) => {
  //       this.setState(prevState => ({
  //         users: [users, ...prevState.users],
  //       }));
  //     });
  // }

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


  const btnClick = () => {
    setClick(true)
  }
  return (
    <>
    <button onClick={btnClick}>Add User</button>
    {click && <UserForm/>}
      <UsersList users={users}/>
    </>
  );
}
