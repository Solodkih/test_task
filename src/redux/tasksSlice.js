import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { done: true, name: 'test1', id: '1111' },
    { done: false, name: 'test2', id: '2222' },
    { done: true, name: 'test3', id: '3333' },
    { done: false, name: 'test4', id: '4444' },
    { done: true, name: 'test5', id: '5555' },
    { done: false, name: 'test6', id: '6666' },
    { done: true, name: 'test7', id: '7777' },
  ],
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
