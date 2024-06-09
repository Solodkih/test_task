import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllTasksFetch,
  addTaskFetch,
  deleteTaskFetch,
  changeTaskFetch,
} from '../AJAX';

export const dowloadAllTasks = createAsyncThunk('dowloadAllTasks', async () => {
  const tasks = await getAllTasksFetch();
  return tasks;
});

export const addTask = createAsyncThunk('addTask', async (task) => {
  const newTask = await addTaskFetch(task);
  return newTask;
});

export const removeTask = createAsyncThunk('removeTask', async (idTask) => {
  const deletedId = await deleteTaskFetch(idTask);
  return deletedId;
});

export const changeTask = createAsyncThunk('changeTask', async (task) => {
  const savedTask = await changeTaskFetch(task);
  return savedTask;
});

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    switchChecked: (state, { payload: { idTask, done } }) => {
      const task = state.find((elem) => {
        return idTask === elem.idTask;
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
    changeName: (state, { payload: { idTask, name } }) => {
      const task = state.find((elem) => {
        return idTask === elem.idTask;
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
    builder.addCase(addTask.fulfilled, (state, { payload }) => {
      state.unshift(payload);
    });
    builder.addCase(removeTask.fulfilled, (state, { payload }) => {
      const index = state.findIndex((elem) => {
        return elem.idTask === payload;
      });
      if (index !== -1) state.splice(index, 1);
    });
    builder.addCase(changeTask.fulfilled, (state, { payload: { idTask, text } }) => {
      const task = state.find((elem) => {
        return idTask === elem.idTask;
      });
      task.text = text;
    });
  },
});

export const { switchChecked, setAllTasks } = tasksSlice.actions;

export default tasksSlice.reducer;

export const getAllTasks = (state) => {
  return state.tasks;
};
