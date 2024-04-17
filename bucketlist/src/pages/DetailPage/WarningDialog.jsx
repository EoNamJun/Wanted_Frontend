/* eslint-disable react/prop-types */
import Dialog from '../../components/Dialog';
import { useDialog } from '../../lib/Layout';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/slices/todoSlice';
import Button from '../../components/Button';

const WarningDialog = ({ id, title, navigate }) => {
  const dispatch = useDispatch();
  const { closeDialog } = useDialog();

  const handleOnDelete = () => {
    console.log(id);
    dispatch(deleteTodo({ id: id }));
    navigate('/');
    closeDialog();
  };

  return (
    <Dialog
      header={<>{title} 삭제</>}
      footer={
        <div className='w-[100%] flex'>
          <Button styleType='w-[40%] mr-4' onClick={() => closeDialog()}>
            취소
          </Button>
          <Button styleType='flex-1 danger' onClick={handleOnDelete}>
            삭제
          </Button>
        </div>
      }
    >
      정말로 삭제하시겠습니까?
    </Dialog>
  );
};

export default WarningDialog;
