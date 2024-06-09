import React, { useState } from 'react';
import { login, getUserId } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export function User({ setShow }) {
  const userId = useSelector(getUserId);
  const dispatch = useDispatch();
  if (userId) {
    setShow(false);
  }

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleChangePassword = function (e) {
    setPassword(e.target.value);
  };

  const handleChangeUserName = function (e) {
    setUsername(e.target.value);
  };

  return (
    <form className="position-absolute top-50 start-50 translate-middle z-3 bg-info p-3 rounded-3">
      <h2 className="h2">Вход</h2>
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
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setShow((show) => {
            return !show;
          });
        }}
      >
        Закрыть
      </button>
    </form>
  );
}
