import { createContext, /* useContext, */ useReducer } from "react";
import { AUTHTYPE } from "./actionTypes";
import { userCredential } from "../constants/common";
import { getFromLocalStorage } from "../helpers/local-storage";

const user = getFromLocalStorage(userCredential)?.user;
const role = getFromLocalStorage(userCredential)?.role;
const token = getFromLocalStorage(userCredential)?.token;

const initialState = {
  user: user !== undefined ? user : null,
  role: role !== undefined ? role : null,
  token: token !== undefined ? token : null,
};

export const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTHTYPE.LOGIN_START:
      return { user: null, role: null, token: null };

    case AUTHTYPE.LOGIN_SUCCESS:
      return {
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };

    case AUTHTYPE.LOGOUT:
      return { user: null, role: null, token: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
