import React from 'react';
import './index.scss';

const Button = ({ children, type = 'button', ...rest }) => {
  return (
    <button type={type} className={`btn btn-dark`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
