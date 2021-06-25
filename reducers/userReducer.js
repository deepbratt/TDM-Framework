import { removeUserSession } from "../utils/general.utils";

const initialNewsState = {
  user: {},
  isLoggedin: false,
};
const userReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedin: true,
      };
    case "LOGOUT":
      removeUserSession();
      return {
        ...state,
        user: null,
        isLoggedin: false,
      };
    default:
      return state;
  }
};

export default userReducer;
