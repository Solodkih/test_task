import React, { useState } from 'react';
import { ListTasks } from './ListTasks/ListTasks';

import { User } from './User/User';

import './app.scss';

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <main className="w-100 d-flex justify-content-center ">
      {show && <User setShow={setShow} />}
      <ListTasks setShow={setShow} />
    </main>
  );
}
