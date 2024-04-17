import { useRef } from 'react';
import Dialog from '../../components/Dialog';
import Button from '../../components/Button';
import { useDialog } from '../../lib/Layout';
import AddTodoFormView from './AddTodoFormView';
import { useTodoLogic } from '../../lib/useTodoLogic';

const AddTodoForm = () => {
  const { closeDialog } = useDialog();
  const inputTitle = useRef(null);
  const inputDesc = useRef(null);
  const { handleAddTodo } = useTodoLogic();

  const handleOnSubmit = () => {
    const title = inputTitle.current.value;
    const desc = inputDesc.current.value;

    handleAddTodo(title, desc, closeDialog);

    inputTitle.current.value = '';
    inputDesc.current.value = '';
  };

  return (
    <Dialog
      header={<>할 일 추가</>}
      footer={
        <div className='w-[100%] flex'>
          <Button styleType='w-[40%] mr-4' onClick={() => closeDialog()}>
            취소
          </Button>
          <Button styleType='flex-1 brand' onClick={handleOnSubmit}>
            추가
          </Button>
        </div>
      }
    >
      <AddTodoFormView
        inputTitle={inputTitle}
        inputDesc={inputDesc}
        handleOnSubmit={handleOnSubmit}
      />
    </Dialog>
  );
};

export default AddTodoForm;
