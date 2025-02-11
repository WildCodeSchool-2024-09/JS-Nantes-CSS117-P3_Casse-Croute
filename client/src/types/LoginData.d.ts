export interface loginDataTypes {
  email?: string;
  password?: string;
}

type LoginFormProps = {
  toggleForm: () => void;
};

export interface LoginPropsI extends loginDataTypes {
  setLoginData?: (loginData: object | undefined) => void;
}
