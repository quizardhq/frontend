import React, { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  submit?: boolean;
  className?: string;
  // other props go here
}

const Button: React.FC<ButtonProps> = function ({
  children,
  submit,
  className,
}) {
  return (
    <div>
      <button type={submit ? 'submit' : 'button'} className={className}>
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  children: null, // or any other default value you want to provide
  submit: false,
  className: '',
};

export default Button;
