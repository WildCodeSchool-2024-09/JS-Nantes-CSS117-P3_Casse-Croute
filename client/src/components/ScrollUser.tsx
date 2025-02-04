import type { userData } from "../types/UserData";

type UserScrollI = {
  users: userData[];
  setSelectUser: (user: userData) => void;
};

function UserScroll({ users, setSelectUser }: UserScrollI) {
  return (
    <menu>
      <ul>
        {users.map((el) => (
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
