import React from 'react';
import { Provider } from 'react-redux';
import { ListTasks } from './ListTasks/ListTasks';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <ListTasks />
    </Provider>
  );
}
