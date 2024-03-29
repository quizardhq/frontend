import React, { ChangeEvent } from 'react';

interface InputProps {
  type: 'email' | 'text' | 'radio' | 'checkbox' | 'password';
  value: string;
  /* eslint-disable-next-line  no-unused-vars */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
  autoComplete?: string;
  name?: string;
}

function Input({
  type,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  id,
  className,
  autoComplete,
  name,
}: InputProps) {
  if (type === 'radio') {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        id={id}
        checked={value === 'true'}
      />
    );
  }

  if (type === 'checkbox') {
    return (
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        id={id}
        name={name}
        className={`appearance-none bg-transparent border-2 border-primary rounded-md grid place-content-center before:content-[""] before:w-3.5 before:h-3.5 before:shadow-[inset_1em_1em_#005F32] before:scale-0 checked:before:scale-100 before:origin-bottom-left before:clip-path ${className}`}
      />
    );
  }
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      id={id}
      className={`w-full bg-transparent outline-none placeholder:text-sm placeholder:text-slate-500 h-full ${className}`}
      autoComplete={autoComplete}
      name={name}
    />
  );
}

export default Input;

Input.defaultProps = {
  onChange: null,
  placeholder: '',
  required: false,
  disabled: false,
  id: '',
  className: '',
  autoComplete: '',
  name: '',
};
