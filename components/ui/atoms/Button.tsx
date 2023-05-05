import React, { ReactNode, MouseEventHandler } from 'react';
import SpinnerIcon from '@/components/ui/atoms/Spinner';

interface ButtonProps {
  children?: ReactNode;
  submit?: boolean;
  className?: string;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  // other props go here
}

const Button: React.FC<ButtonProps> = function ({
  children,
  submit,
  className,
  isLoading,
  onClick,
  isDisabled,
}) {
  return (
    <div>
      <button
        disabled={isDisabled}
        onClick={onClick}
        type={submit ? 'submit' : 'button'}
        className={className}
      >
        {isLoading ? <SpinnerIcon /> : children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  children: null, // or any other default value you want to provide
  submit: false,
  className: '',
  isLoading: false,
  onClick: () => {},
  isDisabled: false,
};

export default Button;
