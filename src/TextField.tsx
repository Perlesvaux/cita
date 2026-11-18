import React, { useId } from 'react';
import './TextField.css';

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  label: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  className = '',
  id,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`field ${className}`.trim()}>
      <input
        {...props}
        id={inputId}
        /* Must be a single space so :not(:placeholder-shown) triggers properly */
        placeholder=" "
      />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
};
