export const initialstate = {
  user: null,
};

export default function r(initialState, action){
  switch (action.type) {
    case 'Login':
      return {
        ...initialState,
        user: action.payload,
      };
    case 'Logout':
      return {
        ...initialState,
        user: null,
      };
    case 'Set':
      return {
        ...initialState,
        user: action.payload,
      };
    default:
      return initialState;
  }
};
