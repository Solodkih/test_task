import { combineReducers } from '@reduxjs/toolkit';

import reducerTask from './taskSlice';

const rootReducer = combineReducers({
  task: reducerTask,
});

export default rootReducer;
