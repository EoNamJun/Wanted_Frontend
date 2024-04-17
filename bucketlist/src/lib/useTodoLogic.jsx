import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addTodo } from '../redux/slices/todoSlice';

export const useTodoLogic = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (title, desc, closeDialog) => {
    if (title.trim() === '') {
      return;
    }

    const id = uuid();
    dispatch(addTodo({ id, title, desc, completed: false }));
    closeDialog();
  };

  return { handleAddTodo };
};
