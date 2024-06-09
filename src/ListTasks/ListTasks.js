import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTask, dowloadAllTasks } from '../redux/tasksSlice';
import './listTasks.scss';

import { Task } from '../Task/Task';
import useFilterTasks from './useFilterTasks';

export function ListTasks() {
  const allTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  useEffect(() => {
    dispatch(dowloadAllTasks());
  }, []);

  const [showCheckedTask, showUnCheckedTask, showAllTasks, showTasks] =
    useFilterTasks(allTasks);

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
      </div>
      <ul>
        {showTasks.map((elem) => {
          return <Task key={elem.id} {...elem} showTasks={showTasks} />;
        })}
      </ul>
    </div>
  );
}