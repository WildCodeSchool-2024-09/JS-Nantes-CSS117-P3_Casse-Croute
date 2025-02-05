import type { userData } from "../types/UserData";

type UserScrollI = {
  users: userData[];
  setSelectUser: (user: userData) => void;
  searchUser: string;
};

function UserScroll({ searchUser, users, setSelectUser }: UserScrollI) {
  return (
    <menu>
      <ul>
        {users
          .filter((val) => {
            if (searchUser === "") {
              return val;
            }
            if (val.pseudo.toLowerCase().includes(searchUser.toLowerCase())) {
              return val;
            }
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
