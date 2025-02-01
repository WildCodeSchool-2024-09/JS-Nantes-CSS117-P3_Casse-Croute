export interface userDataTypes {
  id: number;
  email?: string;
  pseudo?: string;
  password?: string;
  passwordConfirm?: string;
}

export interface userData {
  id?: number;
  email: string;
  pseudo: string;
}

export interface UserPropsI extends userDataTypes {
  setUserData?: (userData: object | undefined) => void;
}
