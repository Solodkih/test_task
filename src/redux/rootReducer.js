import { combineReducers } from '@reduxjs/toolkit';

import reducerTasks from './tasksSlice';

const rootReducer = combineReducers({
  tasks: reducerTasks,
});

export default rootReducer;
