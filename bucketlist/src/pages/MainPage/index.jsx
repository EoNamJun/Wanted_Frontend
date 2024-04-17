import Page from '../../components/Page';
import Title from '../../components/Title';
import Card from '../../components/Card';
import { useSelector } from 'react-redux';
import DispatchButton from './DispatchButton';
import Footer from '../../components/Footer';

const MainPage = () => {
  const todoList = useSelector((state) => state.todos);
  return (
    <div className='MainPage'>
      <Page
        header={<Title>TO DO LIST</Title>}
        footer={
          <Footer>
            <DispatchButton />
          </Footer>
        }
      >
        <div className='text-center'>
          {todoList && todoList.length === 0 ? (
            <div className='h-[120px] m-3 rounded-2xl flex items-center justify-center align-middle hover:bg-gray-100 p-4 bg-gray-200 shadow-md'>
              {'할 일 목록이 존재하지 않습니다 '}
            </div>
          ) : (
            todoList.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.desc}
                completed={item.completed}
              />
            ))
          )}
        </div>
      </Page>
    </div>
  );
};

export default MainPage;
