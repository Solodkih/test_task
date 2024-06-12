import React, { useState, useEffect } from 'react';
import { login, getUserId } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export function User({ setShow }) {
  const userId = useSelector(getUserId);
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (userId) {
      setShow(false);
    }
  }, [userId]);

  const handleChangePassword = function (e) {
    setPassword(e.target.value);
  };

  const handleChangeUserName = function (e) {
    setUsername(e.target.value);
  };

  return (
    <form
      className="position-absolute top-50 start-50 translate-middle z-3 bg-secondary p-3 rounded-0 border-0 px-0 py-0"
      style={{ height: 405 + 'px', width: 415 + 'px' }}
    >
      <h2 className="h2 bg-primary p-3 mb-4 text-light">Вход</h2>
      <button
        type="button"
        className="btn position-absolute position-absolute top-0 end-0"
        onClick={() => {
          setShow((show) => {
            return !show;
          });
        }}
      >
        <img src="./Clouse.png" alt="clouse" height="60px" width="60px" />
      </button>
      <div className="d-flex p-3">
        <label htmlFor="InputEmail" className="form-label">
          <img src="./Username.png" alt="username" height="60px" width="60px" />
        </label>
        <input
          type="email"
          className="form-control rounded-0 border-0 bg-body-secondary"
          id="InputEmail"
          onChange={handleChangeUserName}
          value={username}
          style={{ height: 60 + 'px' }}
        />
      </div>
      <div className="d-flex p-3">
        <label htmlFor="InputPassword" className="form-label">
          <img src="./password.png" alt="username" height="60px" width="60px" />
        </label>
        <input
          type="password"
          className="form-control rounded-0 border-0 bg-body-secondary"
          id="InputPassword"
          onChange={handleChangePassword}
          value={password}
          style={{ height: 60 + 'px' }}
        />
      </div>
      <div className="p-3 w-100 ">
        <button
          type="submit"
          className="btn btn-primary p-3 w-100 rounded-0 border-0 fs-4 text-light"
          onClick={(event) => {
            event.preventDefault();
            dispatch(login({ password, username }));
          }}
        >
          Вход
        </button>
      </div>
    </form>
  );
}
