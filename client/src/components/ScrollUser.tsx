import type { UserScrollI } from "../types/UserData";

function UserScroll({ searchUser, users, setSelectUser }: UserScrollI) {
  return (
    <menu>
      <ul>
        {users
          .filter((val) => {
            if (
              searchUser === "" ||
              val.pseudo.toLowerCase().includes(searchUser.toLowerCase())
            )
              return val;
          })
          .map((el) => (
            <li key={el.id}>
              <button type="button" onClick={() => setSelectUser(el)}>
                {el.pseudo}
              </button>
            </li>
          ))}
      </ul>
    </menu>
  );
}

export default UserScroll;
