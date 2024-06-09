import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTask, dowloadAllTasks } from '../redux/tasksSlice';
import { login, logout, getUserId } from '../redux/userSlice';
import './listTasks.scss';

import { Task } from '../Task/Task';

export function ListTasks() {
  const userId = useSelector(getUserId);
  const allTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleChangePassword = function (e) {
    setPassword(e.target.value);
  };

  const handleChangeUserName = function (e) {
    setUsername(e.target.value);
  };

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
    <div className="list-tasks">
      <h1 className="list-tasks_title">To Do App</h1>
      {userId && (
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
      )}
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Адрес электронной почты
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            onChange={handleChangeUserName}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            onChange={handleChangePassword}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            dispatch(login({ password, username }));
          }}
        >
          Отправить
        </button>
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
      </form>
      <hr />
      <ul className="list-group">
        {allTasks.map((elem) => {
          return <Task key={elem.idTask} {...elem} />;
        })}
      </ul>
    </div>
  );
}
