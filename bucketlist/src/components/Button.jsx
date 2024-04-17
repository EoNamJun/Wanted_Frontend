/* eslint-disable react/prop-types */
const Button = ({ styleType, block, ...rest }) => {
  let className =
    'Button bg-transparent border border-gray-300 dark:border-gray-700 rounded-md p-2';
  if (styleType) className += ` ${styleType}`;
  if (block) className += ' block';

  return <button {...rest} className={className} />;
};

export default Button;
