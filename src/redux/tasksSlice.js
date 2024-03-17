import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    switchChecked: (state, { payload: { id, done } }) => {
      const task = state.find((elem) => {
        return id === elem.id;
      });
      task.done = done;
    },
    addTask: (state, { payload }) => {
      state.unshift(payload);
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
    setAllTasks: (_, { payload: arrayTasks }) => {
      return arrayTasks;
    },
  },
});

export const { switchChecked, addTask, removeTask, changeName, setAllTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;

export const getAllTasks = (state) => {
  return state.tasks;
};
