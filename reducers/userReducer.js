const initialState = {
  user: null,
  isRegistrationSuccess: false,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case 'REGISTRATION_SUCCESS': {
      return {
        ...state,
        isRegistrationSuccess: true,
      };
    }
    case 'AUTH_IN_PROGRESS': {
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    }
    default: {
      return state;
    }
  }
};

export default userReducer;