import Page from '../../components/Page';
import Title from '../../components/Title';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectTodos } from '../../redux/slices/todoSlice';
import DetailCard from './DetailCard';

const DetailPage = () => {
  const params = useParams().id;
  const todo = useSelector((state) => selectTodos(state, params));
  const navigate = useNavigate();

  return (
    <div className='DetailPage'>
      <Page
        header={<Title backUrl='/'>{todo.title}</Title>}
      >
        {todo && (
          <DetailCard
            id={todo.id}
            title={todo.title}
            desc={todo.desc}
            completed={todo.completed}
            navigate={navigate}
          />
        )}
      </Page>
    </div>
  );
};

export default DetailPage;
