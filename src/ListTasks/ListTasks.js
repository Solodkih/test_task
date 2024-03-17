import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTask } from '../redux/tasksSlice';
import './listTasks.scss';

import { Task } from '../Task/Task';
import useFilterTasks from './useFilterTasks';
import useLocalStorage from './useLocalStorage';

export function ListTasks() {
  const allTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const [showCheckedTask, showUnCheckedTask, showAllTasks, showTasks] =
    useFilterTasks(allTasks);

  const [clearStorage, saveTasksToLocalStorage] = useLocalStorage(allTasks);

  const handleOnChange = function (event) {
    setTask(event.target.value);
  };

  const handleOnClick = function (e) {
    dispatch(addTask({ name: task, id: crypto.randomUUID(), done: false }));
    setTask('');
  };

  return (
    <div className="list-tasks">
      <h1 className="list-tasks_title">To Do App</h1>
      <div className="list-tasks_add">
        <input
          placeholder="add new task"
          type="text"
          onChange={handleOnChange}
          value={task}
        />
        <button onClick={handleOnClick}>
          <img src="./add-square-svgrepo-com.svg" alt="add" />
        </button>
      </div>
      <hr />
      <div className="list-tasks_buttons">
        <div className="buttons_filter-buttons">
          <button onClick={showCheckedTask}>
            <img src="./checked-svgrepo-com.svg" alt="show checked" />
          </button>
          <button onClick={showUnCheckedTask}>
            <img
              src="./radio-button-unchecked-svgrepo-com.svg"
              alt="show unchecked"
            />
          </button>
          <button onClick={showAllTasks}>
            <img src="./list-svgrepo-com.svg" alt="show all" />
          </button>
        </div>
        <div className="buttons_save-buttons">
          <button onClick={saveTasksToLocalStorage}>
            <img src="./save-svgrepo-com.svg" alt="save" />
          </button>
          <button onClick={clearStorage}>
            <img src="./delete-2-svgrepo-com.svg" alt="remove" />
          </button>
        </div>
      </div>
      <ul>
        {showTasks.map((elem) => {
          return <Task key={elem.id} {...elem} showTasks={showTasks} />;
        })}
      </ul>
    </div>
  );
}
