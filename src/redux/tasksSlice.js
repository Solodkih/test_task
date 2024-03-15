import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { done: false, name: 'test1', id: crypto.randomUUID() },
    { done: true, name: 'test2', id: crypto.randomUUID() },
  ],
  reducers: {},
});

export const {} = tasksSlice.actions;

export default tasksSlice.reducer;

export const getAllTasks = (state) => {
  return state.tasks;
};
