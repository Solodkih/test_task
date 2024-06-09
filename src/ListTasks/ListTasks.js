import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTask, dowloadAllTasks } from '../redux/tasksSlice';
import './listTasks.scss';

import { Task } from '../Task/Task';

export function ListTasks() {
  const allTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  useEffect(() => {
    dispatch(dowloadAllTasks());
  }, []);

  const handleOnChange = function (event) {
    setTask(event.target.value);
  };

  const handleOnClick = function (e) {
    dispatch(addTask({ text: task, done: false }));
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
      <ul className="list-group">
        {allTasks.map((elem) => {
          return <Task key={elem.idTask} {...elem} />;
        })}
      </ul>
    </div>
  );
}
