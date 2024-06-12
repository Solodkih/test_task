import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTask, dowloadAllTasks } from '../redux/tasksSlice';
import { login, logout, getUserId } from '../redux/userSlice';
import './listTasks.scss';

import { Task } from '../Task/Task';

export function ListTasks({ setShow }) {
  const userId = useSelector(getUserId);
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
    dispatch(addTask({ text: task, done: false, idUser: userId }));
    setTask('');
  };

  return (
    <div className="w-75 min-vh-100">
      <div className="d-flex justify-content-between pt-4">
        <h1 className="h1 text-primary">Список заданий</h1>
        {!userId && (
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={() => {
              setShow((show) => {
                return !show;
              });
            }}
          >
            Вход
          </button>
        )}
        {userId && (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault();
              dispatch(logout());
            }}
          >
            Выйти
          </button>
        )}
      </div>
      {userId && (
        <div className="list-tasks_add">
          <input
            placeholder="Добавить задание"
            type="text"
            onChange={handleOnChange}
            value={task}
          />
          <button onClick={handleOnClick}>
            <img src="./add-square-svgrepo-com.svg" alt="add" height="50px" />
          </button>
        </div>
      )}
      <ul className="list-group">
        {allTasks.map((elem) => {
          return <Task key={elem.idTask} {...elem} />;
        })}
      </ul>
    </div>
  );
}
