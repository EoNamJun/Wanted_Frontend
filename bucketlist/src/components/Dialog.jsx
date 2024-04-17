/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';

const Dialog = ({ header, children, footer }) => {
  const footerRef = React.useRef(null);
  console.log(footerRef);

  React.useEffect(() => {
    if (!footerRef.current) return;

    const buttons = Array.from(footerRef.current.querySelectorAll('button'));
    console.log(buttons);
    if (buttons.length === 0) return;

    const activeButton = buttons[buttons.length - 1];
    activeButton.focus();
  }, [footerRef.current]);

  return (
    <div className='Dialog bg-white rounded-lg flex flex-col p-4 relative z-10'>
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer ref={footerRef}>{footer}</footer>}
    </div>
  );
};

export default Dialog;
