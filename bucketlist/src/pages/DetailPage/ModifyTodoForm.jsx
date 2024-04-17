/* eslint-disable react/prop-types */
import Dialog from '../../components/Dialog';
import { useDialog } from '../../lib/Layout';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { modifyTodo } from '../../redux/slices/todoSlice';
import Button from '../../components/Button';

const ModifyTodoForm = ({ id, title, desc, completed }) => {
  const { closeDialog } = useDialog();
  const inputTitle = useRef(null);
  const inputDesc = useRef(null);
  const inputStatus = useRef(completed);
  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    const newTitle = inputTitle.current.value;
    const newDesc = inputDesc.current.value;
    const newCompleted = Boolean(inputStatus.current.value === 'true');

    if (title.trim() === '') {
      return;
    }

    dispatch(
      modifyTodo({
        id: id,
        title: newTitle ? newTitle : title,
        desc: newDesc ? newDesc : desc,
        completed: newCompleted,
      })
    );
    inputTitle.current.value = '';
    inputDesc.current.value = '';
    inputStatus.current.value = false;
    closeDialog();
  };

  const handleStatusChange = (event) => {
    inputStatus.current.value = Boolean(event.target.value === 'true');
  };

  return (
    <Dialog
      className='w-[300px] h-[300px]'
      header={<>할 일 수정하기</>}
      footer={
        <div className='w-[100%] flex'>
          <Button styleType='w-[40%] mr-4' onClick={() => closeDialog()}>
            취소
          </Button>
          <Button styleType='flex-1 brand' onClick={handleOnSubmit}>
            수정
          </Button>
        </div>
      }
    >
      <form className='flex flex-col w-[300px] h-[100%] p-0'>
        <label className='m-4' htmlFor='todoItem'>
          제목:
          <input
            className='ml-4'
            type='text'
            id='todoItem'
            placeholder={title}
            ref={inputTitle}
            required
          />
        </label>
        <label className='m-4' htmlFor='desc'>
          내용:
          <input
            className='ml-4'
            type='text'
            id='desc'
            placeholder={desc}
            ref={inputDesc}
          />
        </label>
        <label className='m-4' htmlFor='status'>
          완료여부:
          <select
            className='ml-4'
            id='status'
            ref={inputStatus}
            onChange={handleStatusChange}
          >
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
        </label>
      </form>
    </Dialog>
  );
};

export default ModifyTodoForm;
