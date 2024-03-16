import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { done: false, name: 'test1', id: crypto.randomUUID() },
    { done: true, name: 'test2', id: crypto.randomUUID() },
  ],
  reducers: {
    switchChecked: (state, { payload: { id, done } }) => {
      const task = state.find((elem) => {
        return id === elem.id;
      });
      task.done = done;
    },
    addTask: (state, { payload }) => {
      state.push(payload);
    },
    removeTask: (state, { payload: id }) => {
      const index = state.findIndex((elem) => {
        return elem.id === id;
      });
      if (index !== -1) state.splice(index, 1);
    },
    changeName: (state, { payload: { id, name } }) => {
      const task = state.find((elem) => {
        return id === elem.id;
      });
      task.name = name;
    },
  },
});

export const { switchChecked, addTask, removeTask, changeName } = tasksSlice.actions;

export default tasksSlice.reducer;

export const getAllTasks = (state) => {
  return state.tasks;
};
