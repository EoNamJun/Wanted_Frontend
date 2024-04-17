import { useDialog } from '../../lib/Layout';
import AddTodoForm from './AddTodoForm';
import Button from '../../components/Button';
import { FiPlus } from 'react-icons/fi';

const DispatchButton = () => {
  const { openDialog } = useDialog();

  return (
    <Button
      styleType='mt-11 w-8 h-8 border border-black rounded-full px-auto flex items-center justify-center' // Modified to make the button round
      onClick={() => openDialog(<AddTodoForm />)}
    >
      <FiPlus />
    </Button>
  );
};

export default DispatchButton;
