/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const Title = ({ backUrl = '', children }) => {
  if (backUrl) {
    return (
      <div className='flex justify-center items-center h-12'>
        <Link to={backUrl} className='before:text-black font-bold'>
          <FaChevronLeft className='h-4  w-4' />
        </Link>
        <h1 className='flex-1 font-bold text-center text-2xlg'>{children}</h1>
      </div>
    );
  }

  return <h1 className='flex-1 font-bold text-center text-2xl'>{children}</h1>;
};

export default Title;
