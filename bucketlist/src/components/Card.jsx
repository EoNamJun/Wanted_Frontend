/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/slices/todoSlice';
import { MdDone, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Card = ({ id, title, desc, completed,}) => {
  const dispatch = useDispatch();

  const handleOnToggle = () => {
    dispatch(toggleTodo({ id: id }));
  };

  const handleOnDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div
      id={id}
      className='flex items-center bg-gray-50 p-4 my-2 rounded-lg hover:bg-gray-100 '
    >
      <div
        className={`w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center mr-5 cursor-pointer ${
          completed ? 'border-green-500 text-green-500' : ''
        }`}
        onClick={handleOnToggle}
      >
        {completed && <MdDone />}
      </div>
      <div className={`${completed ? 'text-gray-400' : ''} flex text-start`}>
        <Link to={id}>
          <h2 className='text-xl font-bold'>{title}</h2>
          <span>{desc}</span>
        </Link>
      </div>
      <div
        className='w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center ml-auto cursor-pointer hover:text-red-500 hover:border-red-500'
        onClick={handleOnDelete}
      >
        <MdDelete />
      </div>
    </div>
  );
};

export default Card;
