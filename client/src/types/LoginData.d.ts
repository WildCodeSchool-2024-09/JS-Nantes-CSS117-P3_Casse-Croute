export interface loginDataTypes {
  username?: string;
  password?: string;
}

export interface LoginPropsI extends loginDataTypes {
  setLoginData?: (loginData: object | undefined) => void;
}
