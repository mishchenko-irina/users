import s from "./UsersList.module.css";

export default function UsersList({ users }) {
  return (
    <div className={s.listBox}>
      <ul className={s.list}>
        {users &&
          users.map((user) => {
            return (
              <li key={user.id} className={s.listItem}>
                <img
                  src={user.picture}
                  alt="avatar"
                  className={s.listItemAvatar}
                />
                <h2 className={s.listItemTitle}>
                  {user.title} {user.firstName} {user.lastName}
                </h2>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
