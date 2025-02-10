export interface loginDataTypes {
  email?: string;
  password?: string;
}

export interface LoginPropsI extends loginDataTypes {
  setLoginData?: (loginData: object | undefined) => void;
}
