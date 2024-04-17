/* eslint-disable react/prop-types */
import { useDialog } from '../lib/Layout';

const Backdrop = ({ children }) => {
  const { closeDialog } = useDialog();

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains('Backdrop')) {
      closeDialog();
    }
  };

  return (
    <div className='Backdrop' onClick={handleBackdropClick}>
      {children}
    </div>
  );
};

export default Backdrop;
