import { useDispatch } from 'react-redux';
import { setAllTasks } from '../redux/tasksSlice';

let saveId = 0;

export default function useDragAndDrop(id, showTasks) {
  const dispatch = useDispatch();

  function handleDragStart() {
    saveId = id;
  }
  function handleDragLeave() {}
  function handleDragEnd() {}
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDrop(e) {
    e.preventDefault();
    const newArray = [...showTasks];
    const indexDeleteElem = newArray.findIndex((elem) => {
      return elem.id === saveId;
    });
    const [elem] = newArray.splice(indexDeleteElem, 1);
    const indexPutElem = newArray.findIndex((elem) => {
      return elem.id === id;
    });
    newArray.splice(indexPutElem, 0, elem);
    dispatch(setAllTasks(newArray));
  }

  return [
    handleDragStart,
    handleDragLeave,
    handleDragEnd,
    handleDragOver,
    handleDrop,
  ];
}
