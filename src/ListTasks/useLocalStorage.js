import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setAllTasks } from '../redux/tasksSlice';

export default function useLocalStorage(allTasks) {
  const dispatch = useDispatch();

  useEffect(() => {
    const json = localStorage.getItem('allTasks');
    const array = JSON.parse(json);
    if (array) {
      dispatch(setAllTasks(array));
    }
  }, []);

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', json);
  }

  function clearStorage() {
    localStorage.clear();
  }

  return [clearStorage, saveTasksToLocalStorage];
}
