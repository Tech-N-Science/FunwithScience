export const initialstate = {
  user: null,
};

export default function r(initialState, action){
  if (action.type === "Login") {
    return {
      ...initialState,
      user: action.payload,
    };
  } else if (action.type === "Logout") {
    return {
      ...initialState,
      user: null,
    };
  }else if (action.type === "Set") {
    return {
      ...initialState,
      user: action.payload,
    };
  }
   else {
    return initialState;
  }
};
