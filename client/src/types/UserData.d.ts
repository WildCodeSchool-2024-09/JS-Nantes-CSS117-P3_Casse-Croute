export interface userDataTypes {
  email?: string;
  pseudo?: string;
  password?: string;
  passwordConfirm?: string;
}

export interface UserPropsI extends userDataTypes {
  setUserData?: (userData: object | undefined) => void;
}
