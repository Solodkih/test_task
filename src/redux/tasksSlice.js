import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTasksFetch } from '../AJAX';

export const dowloadAllTasks = createAsyncThunk('dowloadAllTasks', async () => {
  const response = await getAllTasksFetch();
  return response;
});

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
  extraReducers: (builder) => {
    builder.addCase(dowloadAllTasks.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { switchChecked, addTask, removeTask, changeName, setAllTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;

export const getAllTasks = (state) => {
  return state.tasks;
};
