/* eslint-disable react/prop-types */
import Button from '../../components/Button';
import WarningDialog from './WarningDialog';
import { useDialog } from '../../lib/Layout';
import ModifyTodoForm from './ModifyTodoForm';

const DetailCard = ({ id, title, desc, completed, navigate }) => {
  const { openDialog } = useDialog();

  return (
    <div className='w-[100%] h-[360px] bg-slate-100 flex flex-col justify-center items-center pl-10 mt-10'>
      <div className='flex flex-col items-start'>
        <h2>제목 : {title}</h2>
        <p>내용 : {desc}</p>
        <p>실행여부 : {completed === true ? '완료' : '진행 중'}</p>
      </div>
      <div className='mt-10 w-[40%] flex justify-around'>
        <Button
          onClick={() => {
            openDialog(
              <ModifyTodoForm
                id={id}
                title={title}
                desc={desc}
                completed={completed}
              />
            );
          }}
        >
          수정
        </Button>
        <Button
          styleType='danger'
          onClick={() => {
            openDialog(
              <WarningDialog id={id} title={title} navigate={navigate} />
            );
          }}
        >
          삭제
        </Button>
        <Button onClick={() => navigate(-1)}>뒤로가기</Button>
      </div>
    </div>
  );
};

export default DetailCard;
