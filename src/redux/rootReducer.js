import { combineReducers } from '@reduxjs/toolkit';

import reducerTasks from './tasksSlice';
import reducerUser from './userSlice';


const rootReducer = combineReducers({
  tasks: reducerTasks,
  user: reducerUser,
});

export default rootReducer;
