import { combineReducers } from 'redux';

import userReducer from './userReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;